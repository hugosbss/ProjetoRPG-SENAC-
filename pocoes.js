export default class Pocoes{
    #capacidade
    #tipo
    constructor(nome,peso,tipo,capacidade){
        this.nome = nome;
        this.peso = peso;
        this.#tipo = tipo;
        this.#capacidade = capacidade;
    }

    get tipo(){
        return this.#tipo;
    }

    get capacidade(){
        return this.#capacidade;
    }


    usar(entidade){
        if (entidade.nome != undefined){
            entidade.fncES.mensagemCompleta(entidade.nome + " usou "+this.nome+" e ganhou "+this.capacidade+" pontos de "+this.tipo);
            if (this.tipo == "Força"){
                entidade.forca = entidade.forca + this.capacidade;
            }else if (this.tipo == "Vida"){
                entidade.vida = entidade.vida + this.capacidade;
            }else if (this.tipo == "Inteligencia"){
                entidade.inteligencia = entidade.inteligencia + this.capacidade;
            }else if (this.tipo == "Sorte"){
                entidade.sorte = entidade.sorte + this.capacidade;
            }else if (this.tipo == "Velocidade"){
                entidade.velocidade = entidade.velocidade + this.capacidade;
            }
        }
    }    
}