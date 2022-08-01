import { ObjectId } from "mongoose";

export interface Vendedor{

    idVendedor: ObjectId,
    nome: string,
    cpf: string,
    salario: number;
}

