const onOpenModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
};
const onCloseModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};

// Recupera a lista de usuários do localStorage (se existir)
let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

// Adiciona um novo usuário na lista e atualiza a lista no localStorage
function adicionarUsuario() {
  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const novoUsuario = { nome, categoria };
  listaUsuarios.push(novoUsuario);
  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  atualizarLista();
}

// Remove um usuário da lista e atualiza a lista no localStorage
function removerUsuario(index) {
  listaUsuarios.splice(index, 1);
  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  atualizarLista();
}

// Atualiza a lista de usuários na página
function atualizarLista() {
  const lista = document.getElementById("lista-usuarios");
  lista.innerHTML = "";
  for (let i = 0; i < listaUsuarios.length; i++) {
    const usuario = listaUsuarios[i];
    const itemLista = document.createElement("li");
    itemLista.innerHTML = usuario.nome + " | " + usuario.categoria;
    const botaoRemover = document.createElement("button");
    botaoRemover.className = "botaoRemover";
    botaoRemover.innerHTML = "Remover";
    botaoRemover.addEventListener("click", function () {
      removerUsuario(i);
    });
    itemLista.appendChild(botaoRemover);
    lista.appendChild(itemLista);
  }
}

// Atualiza a lista de usuários ao carregar a página
atualizarLista();
