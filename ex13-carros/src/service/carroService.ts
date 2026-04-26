import {apagar, buscarTodos, inserir} from '../fetcher/carroFetcher';
import { Carro } from '../model/carro';

export const listarCarros = async () => {
    const res = await buscarTodos();
    if (!res.ok) throw new Error("Erro ao acessar a API.");
    
    const dados = await res.json();
    if (!dados) return [];
    
    return Object.keys(dados).map(key => ({
        id: key,
        ...dados[key]
    }));
};

export const salvarCarro = async (carro: any) => {
    const res = await inserir(carro);
    if (!res.ok) throw new Error("Não foi possível salvar o carro.");
    return await res.json();
};

export const removerCarro = async (id: string) => {
    const res = await apagar(id);
    if (!res.ok) throw new Error("Não foi possível apagar o carro no servidor.");
    
    return await res.json();
};

 