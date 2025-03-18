let amigos = []

const actualizarListaAmigos = () => {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let amigo of amigos) {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = amigo;
    lista.appendChild(nuevoItem);
  }
}

const agregarAmigo = () => {
  const input = document.getElementById("amigo");

  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  actualizarListaAmigos();

  input.value = "";
  input.focus();
}

const sortearAmigo = () => {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
};