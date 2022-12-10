let produtos = document.getElementById("sessao_produto");
let arrayDeprodutos = JSON.parse(localStorage.getItem("produto"))


let html = "";
for (i = 0; i < arrayDeprodutos.length; i++) {
html=html+(    
'<div class="produto">'+
'<ul>'+
    '<div>'+
        '<li>'+ 
            '<img src="/images/'+arrayDeprodutos[i].gabinete+'">' +
        '</li>'+
    '</div>'+
    '<div>'+
        '<li>R$ '+arrayDeprodutos[i].valor+'</li>'+
    '</div>'+
    '<div>'+
        '<li>'+
            '<form action=""><input type="number" min="1"></form>'+
        '</li>'+
    '</div>'+
    '<div>'+
        '<li>R$'+arrayDeprodutos[i].valor+'</li>'+
    '</div>'+
'</ul>'+
'</div>');
}










window.addEventListener('load', function (event) {
    produtos.innerHTML = html;

})

