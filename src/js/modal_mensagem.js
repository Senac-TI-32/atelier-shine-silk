console.log('modal_mensagem.js carregado');

let timerInterval;

async function mensagemEspera(titulo, mensagem, tempo) {
    // Garantimos que qualquer timer anterior seja limpo antes de iniciar um novo
    if (timerInterval) clearInterval(timerInterval);

    Swal.fire({
        title: titulo,
        // ✅ Adicionamos <b></b> no HTML para o querySelector encontrar o elemento do contador
        html: `${mensagem}<br><br>Fechando em <b></b> milissegundos.`,
        timer: tempo,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            
            timerInterval = setInterval(() => {
                // ✅ Adicionada uma proteção: só atualiza se o elemento 'timer' existir na tela
                if (timer) {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }
            }, 100);
        },
        willClose: () => {
            // ✅ Limpa o timer assim que o modal de espera fechar sozinho ou for fechado
            clearInterval(timerInterval);
        }
    });
}

async function mensagemGenerica(mensagem) {
    // Limpa o timer da mensagem de espera antes de abrir a nova mensagem
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    // Retornamos o Swal para que o 'await' no main.js funcione corretamente esperando o usuário clicar em "OK"
    return Swal.fire(mensagem);
}

export { mensagemEspera, mensagemGenerica };
