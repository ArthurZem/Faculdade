import { ObjectId, Schema } from "mongoose";

export interface Pagamento{
    idPagamento: ObjectId;
    metodoPagamento: string;
}

const PagamentoSchema: Schema = new Schema({
    idPagamento: {type: Schema.Types.ObjectId, required: true, unique: true},
    quantidade: { type: Number, required: true},

    
})

