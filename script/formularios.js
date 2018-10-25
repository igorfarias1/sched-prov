var aulasDiurno = document.querySelector("#div-aulas-diurno");
var aulasNoturno = document.querySelector("#div-aulas-not");
var blocoAulaDiurno = document.querySelector("fieldset.field-sec");

function addAulaDiurno(){
    let novoBlocoAula = blocoAulaDiurno.cloneNode(true);

    aulasDiurno.append(novoBlocoAula);
}

function addAulaNot(){
    let novoBlocoAula = blocoAulaDiurno.cloneNode(true);

    aulasNoturno.append(novoBlocoAula);
}
