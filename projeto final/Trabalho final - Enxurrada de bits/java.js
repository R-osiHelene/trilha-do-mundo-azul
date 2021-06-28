function executarAcao(){
    var nome=document.getElementById("nome").Value;

    var idade=0;
    console.log(idade);

    if(idade>=18){
        window.location.href="arquivos/Teste03.pdf";

    } else if(idade =5 && idade <=18) {
        window.location.href="arquivos/Teste02.pdf";
    }
    else{
        window.location.href="arquivos/teste1.pdf";
    }
    alert("Certifique com seu orientador qual Pasta de Atividades você realizará após a avaliação do seu teste.")
}

function executarAcao(){
    var teste=document.getElementById("teste").Value;

    var teste=0;
    console.log(teste);

    if(teste=1){
        window.location.href="arquivos/pasta1.pdf";

        } else if(teste =2) {
        window.location.href="arquivos/pasta2.pdf";

    }else{
        window.location.href="arquivos/pasta3.pdf";
    }

    alert("Realize uma proposta por dia da sua pasta")
}