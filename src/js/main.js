
const secoes = ["header", "hero", "servicos", "sobre", "depoimentos", "rodape"]





async function carregarSecoes(nome) {
    const secaoHTML = await fetch(`src/partials/${nome}.html`)
    document.getElementById(nome).innerHTML = await secaoHTML.text()
    
}

async function montarPagina() {
    for(const nome of secoes){
        try{
            await carregarSecoes(nome)
        }catch(e){
            console.error(e.message)
        }
    }
    
}

montarPagina()


// Função para mudar o slide dos depoimentos

let indiceAtual = 0;//Define o índice inicial como 0, ou seja, começa mostrando o primeiro slide.

function mudarSlide(direcao) {//Cria a função responsável por mudar o slide. O parâmetro "direcao" indica se você quer avançar (1) ou voltar (-1).
  const slides = document.querySelectorAll('.box_depoimentos');//Seleciona todos os elementos HTML com a classe .box_depoimentos.


  const totalSlides = slides.length; //Conta quantos slides existem no total
  
  indiceAtual += direcao; //Atualiza o índice atual somando a direção. Se direcao = 1, vai para o próximo slide. Se direcao = -1, volta para o anterior.
  
  if (indiceAtual >= totalSlides) { 
    indiceAtual = 0; ////Se passar do último slide, volta para o primeiro.
  } else if (indiceAtual < 0) { 
    indiceAtual = totalSlides - 1;//Se tentar ir antes do primeiro, volta para o último.
  }
  
  const track = document.getElementById('trackDepoimentos');//Seleciona o elemento que contém todos os slides.
  track.style.transform = `translateX(-${indiceAtual * 50}%)`;//Move a faixa de slides horizontalmente. Multiplica o índice pelo tamanho do deslocamento (nesse caso, 50% por slide)
}






// Função para o botão "Ler Mais" no Mobile
function toggleTexto(botao) {
  const box = botao.closest('.box_depoimentos');
  const textoContainer = box.querySelector('.texto_depoimento');
  
  if (textoContainer.classList.contains('expandido')) {
    textoContainer.classList.remove('expandido');
    botao.textContent = 'Ler mais...';
  } else {
    textoContainer.classList.add('expandido');
    botao.textContent = 'Ler menos';
  }
}




function slidemuda(){
  
  if(window.innerWidth > 767) {
    setInterval(() => {
      mudarSlide(1);
    }, 5000);
  }
}

slidemuda();


//erro
// if(window.innerWidth > 767) {

//  setInterval(() => {
//    mudarSlide(1);
// }, 5000);
// }
