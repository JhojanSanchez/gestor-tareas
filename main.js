function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const tarea = input.value.trim();
    if (tarea !== "") {
    const li = document.createElement('li');
    li.textContent = tarea;
    document.getElementById('listaTareas').appendChild(li);
    input.value = "";
    }
}
