
//cria array 0 1 2

let frases = ["F1", "F2", "F3"];
let frasesCopiada = [...frases];
//gera as frases
function geradorMensagem() {
    if (frases.length == 0) {
        frases = [...frasesCopiada];
    }
    let indiceGerado = Math.floor(Math.random() * (frases.length));
    let fraseGerada = frases[indiceGerado];

    document.querySelector("#msg").textContent = fraseGerada;
   

}
geradorMensagem();