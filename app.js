let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    listaDeAmigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('A lista está vazia. Adicione amigos antes de sortear.');
        return;
    }

    const sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    const ul = document.getElementById('resultado');
    ul.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}




