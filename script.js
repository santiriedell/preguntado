var puntos = parseInt(localStorage.getItem("puntaje"))
document.getElementById("mostrar").innerHTML = puntos

function ganar(ubi){
    puntos = puntos + 100
    localStorage.setItem("puntaje", puntos)
    window.location.href = ubi
}
function perder(){
    puntos= puntos -100
    localStorage.setItem("puntaje", puntos)
    alert("INCCORRECTA")
} 
function comenzar(){
    localStorage.setItem("puntaje", 0)
    window.location.href = "index.html"
}

function inicio(){
    window.location.href = "comienzo.html"
}