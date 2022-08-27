import { ObjectId , Schema} from "mongoose";

export interface Cliente{

    idProduto: ObjectId,
    nome: string,
    categoria: string,
    preco: number,
    quantidade: number;
}

const ProdutosSchema: Schema = new Schema({
    idProduto: {type: Schema.Types.ObjectId, required: true, unique: true},
    nome: { type: String, required: true},
    tamanho: {type: Number, required: true},
    valor: {type: Number, required: true},
    cor: {type: String, required: true},
    
})