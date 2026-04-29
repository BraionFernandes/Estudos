"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./models/Produto");
const Transportadora_1 = require("./models/Transportadora");
const transportadora = new Transportadora_1.Transportadora();
const produto1 = new Produto_1.Produto("S24 Ultra 512G", 5500);
transportadora.adicionarProduto(produto1);
produto1.pagarProduto(true);
transportadora.adicionarProduto(produto1);
transportadora.removerProduto(produto1);
//# sourceMappingURL=index.js.map