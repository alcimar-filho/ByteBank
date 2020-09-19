import {Cliente} from "../Cliente.js"

export class Conta{


    constructor(SaldoInicial,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Não se pode chamar a classe Conta diretamente");
        }
        this.cliente = cliente;
        this._agencia = agencia;
        this._saldo = SaldoInicial;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }



    sacar(valor){
        throw new Error("O método sacar da classe Conta é abstrato")
    }

    _sacar(valor,taxa){
        valor = valor*taxa;
        if(this._saldo<valor){
            return 0;
        }
        this._saldo-=valor
        return valor;
    }

    depositar(valor){
        if(valor<0){
            return;
        }
        this._saldo+=valor
        return valor
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}