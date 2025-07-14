function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const tarea = input.value.trim();

    if (tarea !== "") {
    const li = document.createElement('li');
    li.textContent = tarea;

    // Crear botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '❌';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.onclick = function () {
        li.remove();
    };

    li.appendChild(botonEliminar);
    document.getElementById('listaTareas').appendChild(li);
    input.value = "";
    }
}
