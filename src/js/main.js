
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

let indiceAtual = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.box_depoimentos');
  const totalSlides = slides.length;
  
  indiceAtual += direcao;
  
  if (indiceAtual >= totalSlides) {
    indiceAtual = 0;
  } else if (indiceAtual < 0) {
    indiceAtual = totalSlides - 1;
  }
  
  const track = document.getElementById('trackDepoimentos');
  track.style.transform = `translateX(-${indiceAtual * 50}%)`;
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


// Opcional: Passar o slide automaticamente a cada 5 segundos

// setInterval(() => {
//   mudarSlide(1);
// }, 5000);
