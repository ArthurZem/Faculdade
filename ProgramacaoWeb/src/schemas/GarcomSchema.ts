import { ObjectId, Schema } from "mongoose";

const GarcomSchema: Schema = new Schema({
    idGarcom: {type: Schema.Types.ObjectId, required: true, unique: true},
    nome: { type: String, required: true},
    salario: { type: Number, required: true},

})