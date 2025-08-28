let amigosInvisibles = [];

function agregarAmigo (){
let input = document.getElementById("amigo")
let nombre = input.value.trim()

if (nombre === ""){
    alert("Por favor, inserte un nombre.")
    return
} else if (amigosInvisibles.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return;
}
    // array de amigos
amigosInvisibles.push(nombre)

//borra la info escrita
input.value = ("")
// actualiza la lista de amigos en el DOM
actualizarListaAmigos()
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for (let i = 0; i < amigosInvisibles.length ; i++){
        let li = document.createElement("li");
        li.textContent = amigosInvisibles[i];
        lista.appendChild(li)
    }
    console.log(amigosInvisibles)
}

function sortearAmigo (){
    if (amigosInvisibles.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let indiceAleatorio = Math.floor (Math.random() * amigosInvisibles.length)
    let amigoSorteado = amigosInvisibles [indiceAleatorio]
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";
}