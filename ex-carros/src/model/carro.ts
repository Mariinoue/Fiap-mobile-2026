import { InferType, number, object, string } from 'yup';

export const carroSchema = object({
    id: number().required('ID é obrigatório'),
    ano: number().required('Ano é obrigatório'),
    placa: string().required('Placa é obrigatória'),
    modelo: string().required('Modelo é obrigatório'),
});

type Carro = InferType<typeof carroSchema>;

export type { Carro };
export default { carroSchema };