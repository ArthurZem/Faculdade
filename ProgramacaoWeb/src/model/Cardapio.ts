import { ObjectId, Schema } from "mongoose";

export interface Cardapio{

    idCardapio: ObjectId,
    preco: number,
    descricao: String;
}

const CarrinhoSchema: Schema = new Schema({
    idCardapio: {type: Schema.Types.ObjectId, required: true, unique: true},
    preco: { type: Number, required: true},
    descricao: {type: String, required: true},

    
})