// Documentar a função com nome id

function mostreConteudo(e, tema) {
    // Declare all variables
    let i, conteudo, btn;
  
    // Get all elements with class="tabcontent" and hide them
    conteudo = document.getElementsByClassName("conteudo");
    for (i = 0; i < conteudo.length; i++) {
      conteudo[i].style.display = "none";
      // conteudo[i].style.border = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    btn = document.getElementsByClassName("btn");
    for (i = 0; i < btn.length; i++) {
      btn[i].className = btn[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tema).style.display = "block";
    e.currentTarget.className += " active"
  } 