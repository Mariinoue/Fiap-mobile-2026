import { InferType, number, object, string } from 'yup';

export const carroSchema = object({
    id: number().integer('O ID deve ser um número inteiro').optional(),
    
    ano: number()
        .required('Ano é obrigatório')
        .positive('O ano deve ser um número positivo')
        .typeError('O ano deve ser um número'),
        
    placa: string()
        .required('Placa é obrigatória')
        .min(5, 'A placa deve ter no mínimo 5 caracteres'),
        
    modelo: string().required('Modelo é obrigatório'),
});

export type Carro = InferType<typeof carroSchema>;