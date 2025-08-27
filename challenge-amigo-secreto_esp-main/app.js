// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Capturar el valor del campo de entrada: Utilizar 
document.getElementById o document.querySelector
 para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse
 de que el campo no esté vacío. Si está vacío, mostrar un alert 
 con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor 
es válido, añadirlo al arreglo que almacena
 los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir 
el nombre, restablecer el campo de texto a una cadena vacía.
*/

/*
Crea una función que recorra el array amigos y agregue 
cada nombre como un elemento <li> dentro de una lista
 HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() 
o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer 
lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para 
recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/
let amigosInvisibles = [];

function agregarAmigo (){
let input = document.getElementById("amigo")
let nombre = input.value.trim()

if (nombre === ""){
    alert("Por favor, inserte un nombre.")
    return
    }
    // array de amigos
amigosInvisibles.push(nombre)

//borra la info escrita
input.value = ("")
// Actualiza la lista de amigos en el DOM
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