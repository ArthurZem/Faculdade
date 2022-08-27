import { ObjectId , Schema} from "mongoose";
import { Garcom } from "./Garcom";
import {Cliente} from "./Cliente";

export interface Pedido{

    idPedido: ObjectId,
    nomeCliente: Cliente,
    nomeGarcom: Garcom;
    mesa: Number;
}

const UsuarioSchema: Schema = new Schema({
    idUsuario: {type: Schema.Types.ObjectId, required: true, unique: true},
    nomeCliente: { type: String, required: true},
    nomeGarcom: { type: String, required: true},
    mesa: { type: Number, required: true, unique: true}
    
})