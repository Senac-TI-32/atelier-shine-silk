const lista = [
  "Vestido de festa longo sereia em renda rosa chá com gola alta bordada e transparência.",
  "Conjunto moderno off-white em malha canelada com cropped de alças e saia longa com fenda.",
  "Conjunto minimalista rosa claro em malha canelada com top tomara que caia e saia longa com fenda lateral.",
  "Blazer de alfaiataria risca de giz verde-oliva com abotoamento duplo e lapela clássica estruturada.",
  "Vestido de festa azul-claro tomara que caia com corselete estruturado e saia fluida em tule brilhante.",
  "Macaquinho estruturado azul-biciclo com decote regata, recortes laterais em tela e caimento alfaiataria justo.",
  "Vestido de noiva clássico off-white com decote V, corpo em renda bordada e saia fluida.",
  "Vestido longo de festa verde-oliva de um ombro só com saia fluida em camadas de tule.",
  "Vestido curto tomara que caia azul-biciclo brilhante com babado em renda na barra.",
  " Pijama de frio felpudo com estampa xadrez nas cores vermelha e preta.",
  "Vestido curto de corte reto confeccionado em tecido estruturado, destacando-se pela estamparia maxi abstrata com inspiração orgânica",
  "Corset tomara-que-caia vermelho vibrante com textura totalmente plissada em linhas diagonais.",
  "Vestido fantasia, marrom de cangaceira com chapéu de couro, lenço vermelho e bandoleira de balas."
]

// Escuta absolutamente qualquer clique na janela da página
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

  //console.log(event)


});
