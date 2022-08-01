import {ObjectId, Schema} from 'mongoose';

export interface Carrinho{
    idCarrinho: ObjectId,
    idProduto: ObjectId,
    quantidade: number;
}

