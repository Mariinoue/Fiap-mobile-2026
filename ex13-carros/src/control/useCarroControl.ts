import { useState, useEffect } from 'react';
import * as service from '../service/carroService';
import { carroSchema } from '../model/carro';

export const useCarroControl = (notificar: (txt: string) => void) => {

    const [modelo, setModelo] = useState("");
    const [placa, setPlaca] = useState("");
    const [ano, setAno] = useState("");
    const [erros, setErros] = useState<any>({});

    const [lista, setLista] = useState<any[]>([]);
    const [isDark, setIsDark] = useState(false);
    const toggleScreenMode = () => setIsDark(!isDark);

    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const carregarTudo = async () => {
        setCarregando(true);
        setMensagem("A aceder à API REST (Firebase)...");
        try {
            const dados = await service.listarCarros();
            setLista(dados);
            setMensagem("Estoque carregado com sucesso!");
        } catch (erro: any) {
            setMensagem("Erro: " + erro.message);
        } finally {
            setCarregando(false);
        }
    };

    const salvar = async () => {
        const novoCarro = { modelo, placa: placa.toUpperCase(), ano: ano ? parseInt(ano) : 0 };

        try {

            await carroSchema.validate(novoCarro, { abortEarly: false });
            setErros({}); 

            setCarregando(true);
            setMensagem("A guardar carro no servidor...");
            await service.salvarCarro(novoCarro);

            setModelo(""); setPlaca(""); setAno("");
            setMensagem("Carro guardado com sucesso!");
            notificar("Carro guardado!");
            await carregarTudo();

        } catch (err: any) {
            if (err.inner) {
                const erroObj: any = {};
                err.inner.forEach((e: any) => erroObj[e.path] = e.message);
                setErros(erroObj);
            } else {
                setMensagem("Erro ao guardar: " + err.message);
            }
            setCarregando(false);
        }
    };

    const remover = async (id: string) => {
        setCarregando(true);
        setMensagem("A apagar registo...");
        try {
            await service.removerCarro(id); 
            setMensagem("Carro removido com sucesso!");
            await carregarTudo();
        } catch (erro: any) {
            setMensagem("Erro ao apagar: " + erro.message);
            setCarregando(false);
        }
    };

    useEffect(() => { carregarTudo(); }, []);

    return {
        modelo, setModelo, placa, setPlaca, ano, setAno, erros,
        lista, carregando, mensagem,
        carregarTudo, salvar, remover,
        isDark, toggleScreenMode
    };
};