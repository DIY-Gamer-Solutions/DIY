let hamburguer = document.querySelector("#menu-sandwich")
let navmenu = document.querySelector("#nav-menu", "#menu-user", "menu-dropdown", "#menu-cart")


hamburguer.onclick = () => {
    if(navmenu.style.transform =="translateX(110%)"){
        navmenu.style.transform = "translateX(0%)"
    } else {
        navmenu.style.transform ="translateX(110%)"
    }
    
}

