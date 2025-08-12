// Crear un array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
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
        actualizarLista(); // Llamamos a la función para actualizar la lista
    }
}

// Implementa una función para actualizar la lista de amigos.
// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
// Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

function actualizarLista() {

// Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    let listaElemento = document.getElementById('listaAmigos');

// Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    listaElemento.innerHTML = '';

// Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
// Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaElemento.appendChild(li);
    }
}

// Implementa una función para sortear los amigos
// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
function sortearAmigo() {
// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (amigos.length == 0) {
        alert('No has ingresado el nombre de ningún amigo. Por favor, ingresa los nombres');
        return;
    } else if (amigos.length == 1){
        alert('Solo has ingresado un nombre. Por favor, ingresa otros nombres para que el juego sea más divertido');
        return;
    } else {
    // Sorteo
    // Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let amigoSorteado = amigos[indiceAleatorio];
        console.log(amigoSorteado);
    // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() e innerHTML para mostrar el amigo sorteado.
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es <strong>${amigoSorteado}</strong>`;

    // Ocultar lista de amigos
        document.getElementById('listaAmigos').style.display = 'none';
    // Deshabilitar controles
        document.getElementById('amigo').disabled = true;
        document.querySelector('.button-add').disabled = true;
        document.getElementById('btnSortear').disabled = true;
    // Habilitar "Nuevo sorteo"
        document.getElementById('btnNuevo').disabled = false;
    }
    
}









