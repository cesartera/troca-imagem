console.log('Estou funcionando!');

//Adiciona o elemento que é a imagem principal à uma variável chamada imagem Principal.
let imagemPrincipal = document.getElementById('imagem-principal');

console.log(imagemPrincipal);//Mostra no console QUEM é a imagem principal

//cria uma variável auxiliar para saber em qual imagem estamos (1, 2 ou 3) e ela é inicializada em 1
let imagemInicial = 1;

//Declaração da função trocarImagem
/*
Esta função recebe como parâmetro o valor numeroImagem para saber se o clique foi em uma das imagens ou se foi no botão.Esta
Veja no HTML que:
- a imagme 1, chama a função com valor 1
- a imagem 2, chama a função com o valor 2
- a imagem 3, chama a função com o valor 3
- o botão chama a variável sem nenhum valor, ou seja o valor será "undefined"
*/
function trocarImagem (numeroImagem) {
    console.log('trocar imagem foi chamada!');//mostra no console que a função foi chamada
    console.log(numeroImagem, "numeroImagem");//mostra no console qual foi o parametro passado na chamada da função

    //Se o parametro for vazio, o valor será undefined e aí entra no outro IF para verificar o valor da variável auxiliar.
    if (numeroImagem === undefined){
        //verifica se a variavel auxiliar imagemInicial é um.
        if(imagemInicial === 1){
            //Se for 1, define ela para 2 e exibe a imagem 2.
            imagemInicial = 2;
            imagemPrincipal.src = `images/imagem-2.png`;
        //Senão for 1, verifica se é 2
        }else if(imagemInicial === 2) {
            //Se for 2, define ela para 3 e exibe a imagem 3
            imagemInicial = 3;
            imagemPrincipal.src = `images/imagem-3.png`;
        //Senão for 2, verifica se é 3
        }else if(imagemInicial === 3) {
            //Se for 3, define ela para 1 e exibe a imagem 1
            imagemInicial = 1;
            imagemPrincipal.src = `images/imagem-1.png`;
        }
    //Se o parametro for diferente de undefined, cai neste else aqui, que vai alterar a imagem de acordo com o parâmetro passado
    }else {
        imagemPrincipal.src = `images/imagem-${numeroImagem}.png`;
    }   
    
}

