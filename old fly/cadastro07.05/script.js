let pessoas = [];
let editandoIndex = null;

function adicionar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const turma = document.getElementById("turma").value;
    const curso = document.getElementById("curso").value;
    const matricula = document.getElementById("matricula").value;

    if (!nome || !idade || !turma || !curso || !matricula) {
        alert("Preencha todos os campos!");
        return;
    }

    const aluno = {
        nome: nome,
        idade: idade,
        turma: turma,
        curso: curso,
        matricula: matricula
    };

    if (editandoIndex === null) {
        pessoas.push(aluno);
    } else {
        pessoas[editandoIndex] = aluno;
        editandoIndex = null;
    }

    limparCampos();
    listar();
}

function listar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    pessoas.forEach((pessoa, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>Nome:</strong> ${pessoa.nome} <br>
            <strong>Idade:</strong> ${pessoa.idade} anos <br>
            <strong>Turma:</strong> ${pessoa.turma} <br>
            <strong>Curso:</strong> ${pessoa.curso} <br>
            <strong>Matrícula:</strong> ${pessoa.matricula} <br><br>

            <button onclick="editar(${index})">Editar</button>
            <button onclick="remover(${index})">Remover</button>
        `;

        lista.appendChild(li);
    });
}

function editar(index) {
    const pessoa = pessoas[index];

    document.getElementById("nome").value = pessoa.nome;
    document.getElementById("idade").value = pessoa.idade;
    document.getElementById("turma").value = pessoa.turma;
    document.getElementById("curso").value = pessoa.curso;
    document.getElementById("matricula").value = pessoa.matricula;

    editandoIndex = index;
}

function remover(index) {
    pessoas.splice(index, 1);
    listar();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("turma").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("matricula").value = "";
}