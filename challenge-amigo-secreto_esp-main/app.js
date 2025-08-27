// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosInvisibles = [];

function agregarAmigo (){
let input = document.getElementById("amigo")
let nombre = input.value.trim()

if (nombre === ""){
    alert("Por favor, inserte un nombre.")
    return
    }
}

// array de amigos
amigosInvisibles.push(nombre)

//borra la info escrita
input.value("")

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

