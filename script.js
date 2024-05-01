// Obtén el modal
var modal = document.getElementById("modal-javascript");

// Obtén todos los botones "Ver más" para los cursos de JavaScript
var btns = document.querySelectorAll(".btn-javascript");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("cerrar")[0];

// Función para mostrar el modal cuando se haga clic en el botón "Ver más"
btns.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
});

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
