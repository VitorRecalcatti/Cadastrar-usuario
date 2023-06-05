
function calendar() {

    window.location.href = 'cadastro_tarefas.html';
}



const nome = document.getElementById("nome_do");
const matricula = document.getElementById("siape");
const contato = document.getElementById("email");
const area_formada = document.getElementById("area");
const carga_horaria = document.getElementById("carga_horaria");
const Hora_iniciall = document.getElementById("dhi");
const Hora_finall = document.getElementById("dhf");
const Nome_tarefa = document.getElementById("nome_tarefa");
const dia_semana = document.getElementById("dia_semana");
const listatarefas = document.getElementById("listatarefas");

var tarefas = [];

const valor_tarefa = {
    nome: nome, 
    Hora_iniciall: Hora_iniciall,
    Hora_finall: Hora_finall,
    Nome_tarefa: Nome_tarefa,
    dia_semana: dia_semana,
}

tarefas.push(valor_tarefa);
mostrar_atividade();



function mostrar_atividade() {
    listatarefas.innerHTML = '';
    tarefas.forEach(tarefa => {
        const item = document.createElement('li');
        const intervalo = converterintervalo(tarefa.Hora_iniciall, tarefa.Hora_finall);
        item.textContent = `${tarefa.nome} - ${tarefa.Nome_tarefa} ${tarefa.dia_semana} ${tarefa.Hora_iniciall} - ${tarefa.Hora_finall}, intervalo: ${intervalo})`;
            listatarefas.appendChild(item);
    })
}



function converterintervalo(dhi, dhf) {
    const inicial = new Date(`2023-01-01T${dhi}`);
    const fim = new Date (`2023-01-01T${dhf}`);
    const diff = Math.abs(fim - inicial);
    const minutos = Math.floor(diff / 1000 / 60);
    const horas = Math.floor(minutos / 60);
    const minutosrestantes = minutos % 60;
    return `${horas}h ${minutosrestantes}min`;


}




