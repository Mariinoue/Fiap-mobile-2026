import { InferType, number, object, string } from 'yup';

export const carroSchema = object({
    id: string().optional(), 
    ano: number()
        .required('Ano é obrigatório')
        .typeError('O ano deve ser um número'),
    placa: string().required('Placa é obrigatória'),
    modelo: string().required('Modelo é obrigatório'),
});

export type Carro = InferType<typeof carroSchema>;