import { ObjectId , Schema} from "mongoose";

export interface Usuario{

    idUsuario: ObjectId,
    senha: string;
}

const UsuarioSchema: Schema = new Schema({
    idUsuario: {type: Schema.Types.ObjectId, required: true, unique: true},
    senha: { type: String, required: true, unique: true},

    
})