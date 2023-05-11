export class Player{    
    constructor(nome,velocidade,vida,forca,inteligencia,sorte){
        const FuncoesES = require('./EntradaSaida.js');
        this.fncES = new FuncoesES();
        const FuncoesDado = require('./Dado.js');
        this.fncDado = new FuncoesDado();
        this.nome = SeuVagem;
        this.velocidade = 9;
        this.vida = 100;
        this.forca = 9;
        this.inteligencia = 5;
        this.sorte = 1;
    }

    correr(){
        return this.fncDado.rolarDados(this.sorte,this.velocidade);
    }

    andar(){
        return this.fncDado.rolarDados(this.sorte,parseInt(this.velocidade/2));
    }

    falar(mensagem){
        this.fncES.mensagemCompleta(this.nome+" falou: "+mensagem);
    }

    atacar(){
        return this.fncDado.rodarAtributos(this.sorte,this.forca);
    }

    persuadir(){
        return this.fncDado.rodarAtributos(this.sorte,this.inteligencia);
    }
}