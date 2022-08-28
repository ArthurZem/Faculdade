import {ObjectId, Schema} from 'mongoose';

interface Cardapio{

    idCardapio: ObjectId,
    preco: number,
    descricao: String;
}

export {Cardapio}