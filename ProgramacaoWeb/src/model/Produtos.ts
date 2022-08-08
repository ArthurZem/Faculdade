import { ObjectId , Schema} from "mongoose";

export interface Produtos{

    idProduto: ObjectId,
    nome: string,
    tamanho: number,
    valor: number,
    cor: string;
}

const ProdutosSchema: Schema = new Schema({
    idProduto: {type: Schema.Types.ObjectId, required: true, unique: true},
    nome: { type: String, required: true},
    tamanho: {type: Number, required: true},
    valor: {type: Number, required: true},
    cor: {type: String, required: true},
    
})