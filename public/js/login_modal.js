var modal = document.getElementById("cadastro");


var btn = document.getElementById("menu-user");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "flex";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}