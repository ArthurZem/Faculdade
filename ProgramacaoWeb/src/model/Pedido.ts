import { ObjectId , Schema} from "mongoose";
import { Garcom } from "./Garcom";
import {Cliente} from "./Cliente";

export interface Pedido{

    idPedido: ObjectId,
    nomeCliente: Cliente,
    nomeGarcom: Garcom;
    mesa: Number;
    numeroPedido: number;
}

