let botao = document.getElementById("btnCompra");
let produto = {
    "id": 1,
    "sku": 'index-i7-16-3080-240-240',
    "nome": 'index.exe',
    "valor": 53749,
    "processador":'Core i7 12700k',
    "meroriaRam":16,
    "placaDeVideo":3080,
    "armazenamentoNvme": 240,
    "armazenamentoSata": 240,
    "gabinete": 'index2.webp' 
}

let arrayDeprodutos = [];

if(localStorage.getItem("produto")!=null){
    arrayDeprodutos=(JSON.parse(localStorage.getItem("produto")));
}



botao.addEventListener('click',function(){
    
    arrayDeprodutos.push(produto);
    arrayDeprodutos=JSON.stringify(arrayDeprodutos);
    localStorage.setItem("produto",arrayDeprodutos);
})