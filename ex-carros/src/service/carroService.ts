import { gravarItem, lerItem, removerItem } from '../fetcher/carroFetcher';
import { Carro } from '../model/carro';

const KEY_CARROS_LISTA = 'CARROS_LISTA';
const KEY_CARRO_ID = 'CARRO_ID';

export const carregarCarros = async (): Promise<Carro[]> => {
    const dados = await lerItem(KEY_CARROS_LISTA);
    return dados ? JSON.parse(dados) : [];
};

export const salvarCarros = (lista: Carro[]) => {
    gravarItem(KEY_CARROS_LISTA, JSON.stringify(lista));
};

export const carregarId = async () => {
    const id = await lerItem(KEY_CARRO_ID);
    return id ? parseInt(id) : 1
};

export const salvarId = (id: number) => {
    gravarItem(KEY_CARRO_ID, id.toString());
}

export const removerCarroById = async (id: number) => {

    const lista = await carregarCarros();

    const novaLista = lista.filter(carro => carro.id !== id);

    await salvarCarros(novaLista);
}

export const excluirTodos = async () => {
    await removerItem(KEY_CARROS_LISTA);
    await removerItem(KEY_CARRO_ID);
}
     