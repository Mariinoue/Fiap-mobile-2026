import { useState, useEffect } from 'react';
import { Carro, carroSchema } from '../model/carro';
import * as service from '../service/carroService';
import { useColorScheme } from 'react-native';

export const useCarroControl = (mensagem: (txt: string) => void) => {


    const screenMode = useColorScheme();

    const [modelo, setModelo] = useState("");
    const [placa, setPlaca] = useState("");
    const [ano, setAno] = useState("");
    const [lista, setLista] = useState<Carro[]>([]);
    const [erros, setErros] = useState<any>({});
    const [contadorId, setContadorId] = useState(1);
    const [isDark, setDark] = useState<boolean>(screenMode === "dark");
    const [recarregando, setRecarregando] = useState<boolean>(false);

    const toggleScreenMode = () => {
        setDark(!isDark);
    }

    const carregarLista = async () => {
        setRecarregando(true);

        try {
            const listaSalva = await service.carregarCarros();
            const idSalvo = await service.carregarId();
            setLista(listaSalva);
            setContadorId(idSalvo);

        } catch (e: any) {
            mensagem("Erro ao carregar: " + e.message);
        } finally {
            setRecarregando(false);
        }
    };

    const salvar = async () => {
        const novoCarro = {
            id: contadorId,
            modelo,
            placa: placa.toUpperCase(),
            ano: parseInt(ano)
        };

        try {
            await carroSchema.validate(novoCarro, { abortEarly: false });

            const novaLista = [...lista, novoCarro];
            const proximoId = contadorId + 1;

            await service.salvarCarros(novaLista);
            await service.salvarId(proximoId);

            setLista(novaLista);
            setContadorId(proximoId);
            limparFormulario();
            mensagem("Carro " + novoCarro.id + " guardado!");
        } catch (err: any) {
            const erroObj: any = {};
            if (err.inner) {
                err.inner.forEach((e: any) => erroObj[e.path] = e.message);
                setErros(erroObj);
            } else {
                mensagem(err.message);
            }
        }
    };

    const remover = async (id: number) => {
        try {
            await service.removerCarroById(id);
            await carregarLista();
            mensagem("Carro removido!");
        } catch (e: any) {
            mensagem("Erro ao remover");
        }
    };

    const apagarTodos = async () => {
        try {
            await service.excluirTodos();
            setLista([]);
            setContadorId(1);
            mensagem("Todos os carros foram excluídos!!");
        } catch (e: any) {
            mensagem("Erro ao excluir todos: " + e.message);
        }
    };

    const limparFormulario = () => {
        setModelo("");
        setPlaca("");
        setAno("");
        setErros({});
    };

    useEffect(() => { carregarLista(); }, []);

    return {
        modelo, setModelo,
        placa, setPlaca,
        ano, setAno,
        lista, erros,
        salvar, remover, apagarTodos,
        recarregando, toggleScreenMode,
        isDark,
        carregarLista
    };
};