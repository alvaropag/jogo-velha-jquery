function criaJogoAleatorio(){
  var posicoes = [];
  var mais_posicoes = Math.round(getRandomArbitrary(1, 2));
  var menos_posicoes = undefined;
  //1 = X
  //2 = 0
  
  if (mais_posicoes == 1) {
    menos_posicoes = 2;
  } 
  else {
    menos_posicoes = 1;
  }
  
  i = 0;
  while(i < 5){
    pos = Math.round(getRandomArbitrary(0, 8));
    if (posicoes[pos] == undefined){
      posicoes[pos] = mais_posicoes;
      i++;
    }
  }
  
  for(i = 0; i < 9; i++){
    if(posicoes[i] == undefined) {
      posicoes[i] = menos_posicoes;
    }
  }
  
  return posicoes;
} 

function toggleJogador(valor){
  if(valor == "X")
    return "0"
  else
    return "X";
}

function montaVetor(){
  var vetor = [];
  vetor[0] = converteSymbolToInt($("#11").html());
  vetor[1] = converteSymbolToInt($("#12").html());
  vetor[2] = converteSymbolToInt($("#13").html());
  vetor[3] = converteSymbolToInt($("#21").html());
  vetor[4] = converteSymbolToInt($("#22").html());
  vetor[5] = converteSymbolToInt($("#23").html());
  vetor[6] = converteSymbolToInt($("#31").html());
  vetor[7] = converteSymbolToInt($("#32").html());
  vetor[8] = converteSymbolToInt($("#33").html());
  
  return vetor;
}

function montaJogoNaUI(posicoes){
  $("#11").html(converteIntToSymbol(posicoes[0]));
  $("#12").html(converteIntToSymbol(posicoes[1]));
  $("#13").html(converteIntToSymbol(posicoes[2]));
  $("#21").html(converteIntToSymbol(posicoes[3]));
  $("#22").html(converteIntToSymbol(posicoes[4]));
  $("#23").html(converteIntToSymbol(posicoes[5]));
  $("#31").html(converteIntToSymbol(posicoes[6]));
  $("#32").html(converteIntToSymbol(posicoes[7]));
  $("#33").html(converteIntToSymbol(posicoes[8]));
}

function validaJogo(posicoes){
  
  //verificacao mais tosca do mundo!
  
  console.log(posicoes);
  
  //primeira linha
  if ((posicoes[0] != undefined) && (posicoes[0] == posicoes[1]) && (posicoes[1] == posicoes[2])){
    colorir("11", "12", "13");
    return true;
  }
  
  //segunda linha
  if ((posicoes[3] != undefined) && (posicoes[3] == posicoes[4]) && (posicoes[4] == posicoes[5])){
    colorir("21", "22", "23");
    return true;
  }
  
  //terceira linha
  if ((posicoes[6] != undefined) && (posicoes[6] == posicoes[7]) && (posicoes[7] == posicoes[8])){
    colorir("31", "32", "33");
    return true;
  }
  
  
  //primeira coluna
  if ((posicoes[0] != undefined) && (posicoes[0] == posicoes[3]) && (posicoes[3] == posicoes[6])){
    colorir("11", "21", "31");
    return true;
  }  
  
  //segunda coluna
  if ((posicoes[1] != undefined) && (posicoes[1] == posicoes[4]) && (posicoes[4] == posicoes[7])){
    colorir("12", "22", "32");
    return true;
  }  
  
  //terceira coluna
  if ((posicoes[2] != undefined) && (posicoes[2] == posicoes[5]) && (posicoes[5] == posicoes[8])){
    colorir("13", "23", "33");
    return true;
  }  
  
  //diagonal 1
  if ((posicoes[0] != undefined) && (posicoes[0] == posicoes[4]) && (posicoes[4] == posicoes[8])){
    colorir("11", "22", "33");
    return true;
  }  
  
  //diagonal 2
  if ((posicoes[2] != undefined) && (posicoes[2] == posicoes[4]) && (posicoes[4] == posicoes[5])){
    colorir("13", "22", "31");
    return true;
  }
  
  return false;
  
}

function isCompleto(posicoes){
  return $("td:empty").length == 0;  
}

function colorir(el1, el2, el3){
  $("#" + el1).css("background", "green"); 
  $("#" + el2).css("background", "green");
  $("#" + el3).css("background", "green");
}

function converteIntToSymbol(valor){
  if (valor == 1) {
    return "X";
  }
  else if (valor == 2){
    return "0";
  }
  else
    return undefined;
}

function converteSymbolToInt(valor){
  if(valor == "X"){
    return 1;
  }
  else if (valor == "0"){
    return 2
  }
  else
    return undefined;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
