let botao = document.getElementById("btnCompra");
let itens = localStorage.getItem("produto");

botao.onclick = function() {

    localStorage.setItem("produto", itens);

  }