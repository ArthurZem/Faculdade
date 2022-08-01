import { ObjectId } from "mongoose";

export interface Pagamento{
    idPagamento: ObjectId;
    metodoPagamento: string;
}