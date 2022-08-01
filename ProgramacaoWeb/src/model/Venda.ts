import { ObjectId } from "mongoose";

export interface Venda{

    idVenda: ObjectId,
    dataVenda: string,
    idVendedor: ObjectId;
}