
// armazena as irformaçãos do usuario
function calendar() {
    var nome = document.getElementById(nome);
    var matricula = document.getElementById(siape);
    var contato = document.getElementById(email);
    var area_formada = document.getElementById(area);
    var carga_horaria = document.getElementById(carga_horaria);
}


//função para abrir e fechar o modal
function modal2() {
    
    const button = document.getElementById("open_modal2");
    const modal = document.getElementById("dialogtwo");
    const buttonClose = document.getElementById("concluido");


    //quando clicar o modal abre
    button.onclick = function() {
        modal.showModal()
    }

    //quando clicar no botão concluido (armazenado na cont buttonClose) o modal fecha
    buttonClose.onclick = function() {
        modal.close()
    }
}



function add_tarefa() {

    // pega as variaveis do html hora final e inicial, os tranforma em float
    var hora_inicial = parseFloat(document.getElementById("dhi").value);
    var hora_final = parFloar(document.getElementById("dhf").value);


    //variaveis do dia da semana e do nome da tarefa
    const dia_semana = document.getElementById("dia_semana");
    var nome_tarefa = document.getElementById("nome_tarefa");


    //diminui uma hora pela outra, delta tempo
    var resultado_subtração = hora_final - hora_final;


    //lista com a duração, o dia da semana e o nome da tarefa
    var tarefas = [resultado_subtração, dia_semana, nome_tarefa];

}