import { ObjectId } from "mongoose";

export interface Produtos{

    idProduto: ObjectId,
    nome: string,
    tamanho: number,
    valor: number,
    cor: string;
}