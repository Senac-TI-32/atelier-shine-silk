
const secoes = ["header", "hero", "servicos", "galeria", "sobre", "depoimentos", "rodape"]




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




function desktopSlide(){
  if(window.screen.width > 767){
     setInterval(() => {
   mudarSlide(1);
 },5000);
  }
   
  
  }

  desktopSlide()

 


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

// Escuta absolutamente qualquer clique na janela da página
const lista =[
  "Vestido de festa longo sereia em renda rosa chá com gola alta bordada e transparência.",
  "Conjunto moderno off-white em malha canelada com cropped de alças e saia longa com fenda.",
  "Conjunto minimalista rosa claro em malha canelada com top tomara que caia e saia longa com fenda lateral.",
  "Blazer de alfaiataria risca de giz verde-oliva com abotoamento duplo e lapela clássica estruturada.",
  "Vestido de festa azul-claro tomara que caia com corselete estruturado e saia fluida em tule brilhante.",
  "Macaquinho estruturado azul-biciclo com decote regata, recortes laterais em tela e caimento alfaiataria justo.",
  "Vestido de noiva clássico off-white com decote V, corpo em renda bordada e saia fluida.",
  "Vestido longo de festa verde-oliva de um ombro só com saia fluida em camadas de tule.",
  "Vestido curto tomara que caia azul-biciclo brilhante com babado em renda na barra."
]

window.addEventListener('click', (event) => {
  
  // 1. Verifica se o elemento clicado é uma imagem da galeria
  if (event.target.classList.contains('galeria-img')) {
    const imagemClicada = event.target;
    
    
    // Busca o modal e seus componentes dinamicamente no momento do clique
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");


    if (modal && modalImg) {
      modal.style.display = "block";
      modalImg.src = imagemClicada.src;
      captionText.innerHTML = imagemClicada.alt || lista[imagemClicada.dataset.id]
      //console.log("Modal aberto com sucesso para a imagem:", imagemClicada.dataset.id);
    } else {
      //console.error("O HTML do modal não foi encontrado na página neste momento.");
    }
  }

  // 2. Verifica se o elemento clicado é o botão de fechar (X)
  if (event.target.classList.contains('close')) {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
      //console.log("Modal fechado pelo botão X");
    }
  }

  // 3. Verifica se o usuário clicou no fundo escuro do modal para fechar
  const modal = document.getElementById("myModal");
  if (modal && event.target === modal) {
    modal.style.display = "none";
    //console.log("Modal fechado pelo fundo escuro");
  }
});



