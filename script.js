const botaoOla = document.getElementById('botao-ola');
botaoOla.addEventListener('click', function() {
    alert("Olá")});

const mudarTitulo = document.getElementById('btn-mudar-titulo');
mudarTitulo.addEventListener('click', function() {
document.getElementById("titulo").innerText = "O título também foi modificado!";
});

function modificarFrases() {
    let frases = document.getElementsByClassName("mensagem2"); 
  
    for (let i = 0; i < frases.length; i++) {
      frases[i].innerText = `Frase ${i + 1} foi modificada!`;
    }
  
  }
  
 
  document.getElementById("botao").addEventListener("click", modificarFrases);
  