import { ObjectId, Schema } from "mongoose";


const ClienteSchema: Schema = new Schema({
    idCliente: {type: Schema.Types.ObjectId, required: true, unique: true},
    nome: { type: String, required: true},
    
})

export default ClienteSchema;