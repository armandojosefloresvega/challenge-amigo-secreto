let amigos = []

const agregarAmigo = () => {
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");

  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombre;
  lista.appendChild(nuevoItem);

  input.value = "";
  input.focus();
}