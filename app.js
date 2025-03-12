let nomeAmigo = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome."); 
    } else {
        nomeAmigo.push(nome); 
        document.getElementById('listaAmigos').innerHTML += '<li>' + nome + '</li>';
        document.getElementById('amigo').value = ""; 
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < nomeAmigo.length; i++) {
        lista.innerHTML += '<li>' + nomeAmigo[i] + '</li>'; 
    }
}

function sortearAmigo() {
    if (nomeAmigo.length === 0) {
        alert("Adicione amigos antes de sortear!"); 
    } else {
        let indiceSorteado = Math.floor(Math.random() * nomeAmigo.length); 
        let amigoSorteado = nomeAmigo[indiceSorteado]; 
        document.getElementById('resultado').innerHTML = "Amigo sorteado: " + amigoSorteado;
    }
}

function limparLista() {
    nomeAmigo = []; 
    document.getElementById('listaAmigos').innerHTML = ""; 
    document.getElementById('resultado').innerHTML = ""; 
}
