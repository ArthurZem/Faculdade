import { ObjectId, Schema } from "mongoose";
import { Vendedor } from "./Vendedor";

export interface Venda{

    idVenda: ObjectId,
    dataVenda: string,
    idVendedor: ObjectId;
}

const CarrinhoSchema: Schema = new Schema({
    idVenda: {type: Schema.Types.ObjectId, required: true, unique: true},
    quantidade: { type: Number, required: true},

    
})