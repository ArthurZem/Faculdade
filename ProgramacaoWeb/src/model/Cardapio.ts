import {ObjectId, Schema} from 'mongoose';

export interface Cardapio{

    idCardapio: ObjectId,
    preco: number,
    descricao: String;
}

