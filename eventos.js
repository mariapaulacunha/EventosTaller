function saludar() {
    alert("Hola!");
}

document.getElementById("holaBoton").addEventListener("click", function(event) {
    event.stopPropagation();
    saludar();
});

document.getElementById("holaDiv").addEventListener("click", function() {
    alert("Hola! Soy el div");
});