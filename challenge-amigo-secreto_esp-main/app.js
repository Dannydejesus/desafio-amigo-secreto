// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  listaAmigos.push(nombre);
  mostrarLista();
  input.value = "";
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";

  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaElement.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("La lista de amigos está vacía.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[indiceAleatorio];

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
