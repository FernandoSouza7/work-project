//****** NÃO ENVIAR OS COMENTÁRIOS *****

function mostreConteudo(e, tema) {
  let i, conteudo, btn;

  //Receber todos os elementos da classe conteudo
  conteudo = document.getElementsByClassName("conteudo");
  for (i = 0; i < conteudo.length; i++) {
    conteudo[i].style.display = "none";
  }
  // Receber todos os elementos da classse btn
  btn = document.getElementsByClassName("btn");
  for (i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace(" active", "");
  }
  // Mostrar a tab atual, e adicionar o active para abrir o conteúdo no botão
  document.getElementById(tema).style.display = "block";
  e.currentTarget.className += " active";
}
