import {  
    fundoClaro ,
    fundoEscuro,
    textoFundoClaro,
    textoFundoEscuro,
    conteudoFundoClaro,
    conteudoFundoEscuro,
} from  './variaveis'

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoFundoClaro,
    text: textoFundoClaro,
    filter: ''
} 

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoFundoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)"
} 