const URL_BASE = "https://revenda-carro-default-rtdb.firebaseio.com/carros";

export const buscarTodos = (): Promise<Response> => {
    return fetch(`${URL_BASE}.json`);
};

export const inserir = (carro: any): Promise<Response> => {
    return fetch(`${URL_BASE}.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carro)
    });
};

export const apagar = (id: string): Promise<Response> => {
    return fetch(`${URL_BASE}/${id}.json`, {
        method: 'DELETE'
    });
};