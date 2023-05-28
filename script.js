function calendar() {
    var nome = document.getElementById(nome);
    var matricula = document.getElementById(siape);
    var contato = document.getElementById(email);
    var area_formada = document.getElementById(area);
    var carga_horaria = document.getElementById(carga_horaria);
}

function modal2() {
    const button = document.getElementById("open_modal2");
    const modal = document.getElementById("dialogtwo");
    const buttonClose = document.getElementById("concluido");

    button.onclick = function() {
        modal.showModal()
    }

    buttonClose.onclick = function() {
        modal.close()
    }

    const add_evento = document.getElementsByClassName("info_add")
}
