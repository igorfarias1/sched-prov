function buscarIcones(){
    let pesquisa = document.querySelector('.search-box').value;
    let divsIcones = document.querySelectorAll('div.icons');

    let div;
    

    for(let i = 0; i < divsIcones.length; i++){
        
        conteudoIcone = divsIcones[i].querySelector("a").querySelector("figure").querySelector("figcaption").innerHTML;
        if(conteudoIcone.toLowerCase().includes(pesquisa.toLowerCase())){
            divsIcones[i].style.display = '';
        } else{
            divsIcones[i].style.display = 'none';
        }
}

}