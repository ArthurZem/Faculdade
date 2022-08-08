import { ObjectId, Schema } from "mongoose";

export interface Vendedor{

    idVendedor: ObjectId,
    nome: string,
    cpf: string,
    salario: number;
}


const CarrinhoSchema: Schema = new Schema({
    idVendedor: {type: Schema.Types.ObjectId, required: true, unique: true},
    quantidade: { type: Number, required: true},

    
})
