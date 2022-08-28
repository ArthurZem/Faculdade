import {ObjectId, Schema} from 'mongoose';
import { Cliente } from './Cliente';

export interface Garcom{
    idGarcom: ObjectId,
    nome: string,
    salario: number;
}

