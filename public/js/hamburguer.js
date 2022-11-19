let hamburguer = document.querySelector("#menu-sandwich")
let navmenu = document.querySelector("#nav-hamburguer")



hamburguer.onclick = () => {
    if(!navmenu.classList.contains("nav-hamburguer-open")){
        navmenu.classList.add("nav-hamburguer-open")
    }else{
        navmenu.classList.remove("nav-hamburguer-open")
    }
    
}

