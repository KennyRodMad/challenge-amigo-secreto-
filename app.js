// Crear un array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigos() {
    // Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let nombreIngresado = document.getElementById('amigo').value.trim(); // trim() para evitar que se agreguen espacios en blanco como nombres válidos.

    // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (nombreIngresado == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        amigos.push(nombreIngresado);
        console.log(amigos);
        // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';
    }
}







