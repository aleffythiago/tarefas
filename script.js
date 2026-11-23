
function adicionarTarefa() {

    let campo = document.getElementById("tarefa");
    let texto = campo.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let item = document.createElement("li");

    item.textContent = texto;

    item.onclick = function() {
        item.remove();
    };

    lista.appendChild(item);

    campo.value = "";
}
