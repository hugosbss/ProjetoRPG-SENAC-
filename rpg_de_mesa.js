function rodarDado(min,max){
    min = Math.ceil(min); 
    max = Math.floor(max);
    numero = Math.floor(Math.random() * (max - min) + min);
    return numero
}

function rodarAtributos(sorte, atributo){
    var maior = 0;
    for (var i=0; i < sorte; i++){
        var n1 = rodarDado(1, atributo+1);
        if(maior < n1){
            maior = n1;
        }
    }
    return maior;
}

function mensagemCompleta(mensagem){
    console.log("**********************************************");
    console.log(mensagem);
    console.log("**********************************************");
}

const Player1 = {
    nome:"TatyComendo",
    velocidade:5,
    vida: 200,
    forca: 6,
    inteligencia: 2,
    sorte: 8,
    correr(){
        return rodarAtributos(this.sorte,this.velocidade);
    },
    andar(){
        return rodarAtributos(this.sorte,parseInt(this.velocidade/2)); 
    },
    falar(mensagem){
        mensagemCompleta("O "+this.nome+" falou : "+mensagem);
    },
    atacar(){
        return rodarAtributos(this.sorte,this.forca);
    },
    persuadir(){
        return rodarAtributos(this.sorte,this.inteligencia);
    }
}

const Player2 = {
    nome:"SeuVagem",
    velocidade:9,
    vida: 200,
    forca: 10,
    inteligencia: 7,
    sorte: 5,
    correr(){
        return rodarAtributos(this.sorte,this.velocidade);
    },
    andar(){
        return rodarAtributos(this.sorte,parseInt(this.velocidade/2)); 
    },
    falar(mensagem){
        mensagemCompleta("O "+this.nome+" falou : "+mensagem);
    },
    atacar(){
        return rodarAtributos(this.sorte,this.forca);
    },
    persuadir(){
        return rodarAtributos(this.sorte,this.inteligencia);
    }
}

const Sword = {
    nome: "Espada de madeira",
    peso: 4,
    capacidade: 5,
    tipo: "força",
    guardar(){
        
    },
    jogarFora(){

    },
    usar(entidade){
        if (entidade.nome != undefined){
            mensagemCompleta(entidade.nome + " pegou "+this.nome+" e ganhou "+this.capacidade+" pontos de "+this.tipo);
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

const Cajado = {
    nome: "Kajado Magico",
    peso: 5,
    capacidade: 10,
    tipo: "magia",
    guardar(){
        
    },
    jogarFora(){
        
    },
    usar(entidade){
        if (entidade.nome != undefined){
            mensagemCompleta(entidade.nome + " pegou "+this.nome);
        }
    }
}

const pocao_forca = {
    nome: "Poção de Força",
    peso: 2,
    capacidade: 100,
    tipo: "Força",
    guardar(){
        
    },
    jogarFora(){

    },
    usar(entidade){
        if (entidade.nome != undefined){
            mensagemCompleta(entidade.nome + " usou "+this.nome+" e ganhou "+this.capacidade+" pontos de "+this.tipo);
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




function atacar(atacante, vitima){
    if (atacante.forca != undefined && vitima.vida != undefined){
        
        mensagemCompleta(atacante.nome + " atacou o "+ vitima.nome);
        dano = atacante.atacar();
        vitima.vida = vitima.vida - dano;
        mensagemCompleta(atacante.nome + " causou "+dano+" de dano ao "+vitima.nome+" que ficou com "+vitima.vida+ " pontos de vida");
    }
}



//console.log(Player1.nome)
atacar(Player1,Player2);
Sword.usar(Player2);
Cajado.usar(Player1);
atacar(Player2,Player1);


