import {ObjectId, Schema} from 'mongoose';
import { Cliente } from './Cliente';

export interface Garcom{
    idGarcom: ObjectId,
    nome: string,
    salario: number;
}

const RelatioSchema: Schema = new Schema({
    idGarcom: {type: Schema.Types.ObjectId, required: true, unique: true},
    nome: { type: String, required: true},
    salario: { type: Number, required: true},

})