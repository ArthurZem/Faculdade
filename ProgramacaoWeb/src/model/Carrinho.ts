import {ObjectId, Schema} from 'mongoose';
import { Produtos } from './Produtos';

export interface Carrinho{
    idCarrinho: ObjectId,
    idProduto: ObjectId,
    quantidade: number;
}

const CarrinhoSchema: Schema = new Schema({
    idCarrinho: {type: Schema.Types.ObjectId, required: true, unique: true},
    quantidade: { type: Number, required: true},

    
})