import { Produto } from "./models/Produto";
import { Transportadora } from "./models/Transportadora";

const transportadora=new Transportadora();
const produto1= new Produto("S24 Ultra 512G",5500);

transportadora.adicionarProduto(produto1);
produto1.pagarProduto(true);
transportadora.adicionarProduto(produto1);
transportadora.removerProduto(produto1);