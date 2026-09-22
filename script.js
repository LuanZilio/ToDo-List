const botaoAdicionar = document.getElementById("botaoAdicionar");
const inputTarefas = document.getElementById("inputTarefas");
const listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault()

    const textoInput = inputTarefas.value.trim()
        if (textoInput !== "") {
            const novaTarefa = document.createElement("li");
            novaTarefa.textContent = textoInput;
            listaTarefas.appendChild(novaTarefa);
            inputTarefas.value = "";
        }
})