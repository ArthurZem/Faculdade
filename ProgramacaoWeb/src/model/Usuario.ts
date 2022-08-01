import { ObjectId } from "mongoose";

export interface Usuario{

    idUsuario: ObjectId,
    senha: string;
}