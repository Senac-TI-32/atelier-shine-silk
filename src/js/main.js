console.log('main.js carregado');

const secoes = ["header", "hero", "servicos", "galeria", "sobre", "depoimentos", "newsletter", "rodape"];

import { mensagemEspera, mensagemGenerica } from './modal_mensagem.js'; 

async function carregarSecoes(nome) {
  // Adicionada a barra '/' no início para funcionar em qualquer servidor
  const secaoHTML = await fetch(`/src/partials/${nome}.html`);
  document.getElementById(nome).innerHTML = await secaoHTML.text();
}

async function montarPagina() {
  for (const nome of secoes) {
    try {
      await carregarSecoes(nome);
    } catch (e) {
      console.error(e.message);
    }
  }
  

  

  // Cria o observador que detecta quando os elementos aparecem na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Se a div estiver visível na tela
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel'); // Adiciona a classe que ativa o CSS
        observer.unobserve(entry.target); // Para de observar este card (anima apenas uma vez)
      }
    });
  }, {
    threshold: 0.15 // Dispara a animação quando 15% do card aparecer na tela
  });

  // Seleciona todas as divs de serviços e adiciona ao observador
  const cards = document.querySelectorAll('.itens_servicos');
  cards.forEach(card => observer.observe(card));

  document.querySelectorAll('.animar-scroll').forEach(div => {
    observer.observe(div);
  });




  /*

  // Opção alternativa: Se você quiser que a animação aconteça TODA VEZ que o usuário rolar, use este código:
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        // Se a imagem apareceu na tela, adiciona a classe que anima
        entrada.target.classList.add('visivel');
      } else {
        // SE O USUÁRIO ROLAR E A IMAGEM SAIR DA TELA, REMOVE A CLASSE
        // É isso que faz a animação acontecer TODA VEZ que ele rola!
        entrada.target.classList.remove('visivel');
      }
    });
  }, {
    threshold: 0.5 // Ativa quando pelo menos 50% da imagem aparece na tela
  });
  
  // Aplica o observador em todas as fotos com a classe
  document.querySelectorAll('.animar-scroll').forEach(div => {
    observador.observe(div);
  });

  */

  


  // O listener do formulário só é criado DEPOIS que todas as seções (incluindo a newsletter) carregaram
  document.getElementById('formulario').addEventListener('submit', async function (e) {
    e.preventDefault();


    // 1. Captura os novos campos do HTML
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação (opcional: veja se quer tornar obrigatório)
    if (email==="" || phone==="" || nome==="" || mensagem==="") {
      await  mensagemGenerica('Por favor, preencha todos os campos do formulário!');
        return;
    }

    // 2. Coloca tudo dentro do pacote que vai para o PHP
    const dados = {
        nome: nome,
        email: email,
        phone: phone,
        mensagem: mensagem
    };

    

    try {
      // Enviando os dados para o seu arquivo PHP na raiz do projeto
      const resultado = await fetch('backend/public/index.php', {
        method: 'POST', // ou 'GET' dependendo de como você quer enviar os dados
        body: JSON.stringify(dados)
      });

      
      // mensagemEspera("Aguarde", "Enviando email...", 5000)
      const confirmacao = await resultado.json();
      
      if (confirmacao.status) {

       await mensagemGenerica("Email enviado com sucesso!");
            clearInterval(timerInterval);
        this.reset();   // Limpa o formulário apenas se der certo

        
      } else {
        await mensagemGenerica(` Erro:  ${confirmacao.mensagem}`);
      }
    } catch (erro) {
      console.error("Erro na requisição:", erro);
      //await mensagemGenerica('Não foi possível conectar ao servidor PHP.');
    }
  });
}

montarPagina();
//mensagemEspera();













