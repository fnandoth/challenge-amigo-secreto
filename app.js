var amigos = [];


function agregarAmigo(e){
    e.preventDefault();
    const amigo = document.getElementById("amigo").value.trim();
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos(amigo);
}

function actualizarListaAmigos(amigo) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.insertBefore(li, lista.firstChild);
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert("Añade al menos dos amigos para sortear");
        return;
    }

    const resultados = document.getElementById("resultado");
    resultados.innerHTML = "";
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultados.textContent = `El amigo sorteado es: ${amigoSorteado}`;

}