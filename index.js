import {Cliente} from "./Cliente.js"
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js"

const cliente = new Cliente('Nelis',45678978978,123457)
const gerente = new Gerente('Marcio',15000,12345678912);
const diretor = new Diretor('Leandro', 35000,12345612345);
diretor.cadastrarSenha(123456);

let estaLogado = SistemaDeAutenticacao.login(cliente,123456);
let estaLogado2 = SistemaDeAutenticacao.login(diretor,123456);
let estaLogado3 = SistemaDeAutenticacao.login(gerente,null);

console.log(estaLogado);
console.log(estaLogado2);
console.log(estaLogado3);