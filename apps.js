
//cria array 0 1 2

let frases = ["F1", "F2", "F3"];
let frasesCopiada = [...frase];
function geradorMensagem(){
  if(frases.length==0){
    frases=[...frasesCopiada];
  }
  let indiceGerado = Math.floor(Math.random()*(frases.length));
  let fraseGerada = frases[indiceGerado];
  console.log(fraseGerada)
  document.querySelector("#msg").textContent=fraseGerada;
  frases.splice(indiceGerado,1);
}
geradorMensagem()
