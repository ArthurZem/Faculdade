import { ObjectId, Schema } from "mongoose";


const CardapioSchema: Schema = new Schema({
    idCardapio: {type: Schema.Types.ObjectId, required: true, unique: true},
    preco: { type: Number, required: true},
    descricao: {type: String, required: true},

    
})

export default CardapioSchema;
