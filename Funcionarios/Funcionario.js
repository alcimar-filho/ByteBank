export class Funcionario{

    constructor(nome,salario,cpf){
        if(this.constructor == Funcionario){
            throw new Error("Não se pode chamar a classe Funcionario diretamente");
        }
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    get senha(){
        return this._senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }

}