import { ObjectId, Schema } from "mongoose";

const PedidoSchema: Schema = new Schema({
    idUsuario: {type: Schema.Types.ObjectId, required: true, unique: true},
    nomeCliente: { type: String, required: true},
    nomeGarcom: { type: String, required: true},
    mesa: { type: Number, required: true, unique: true},
    numeroPedido: {type: Number, required: true}
})