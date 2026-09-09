// 1. Apenas carrega o arquivo local na raiz
import '/sweetalert2.js';

let timerInterval;

export function mensagemEspera(titulo, message, tempo){
    // Captura o Swal no momento em que a função é executada
    const Swal = window.Swal; 
    
    if (!Swal) {
        alert(titulo + ": " + message);
        return;
    }

    Swal.fire({
        title: titulo,
        html: message,
        timer: tempo,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
    });
}

export function mensagemGenerica(mensagem){
    // Captura o Swal no momento do clique do botão enviar
    const Swal = window.Swal; 

    // Plano B (Fallback): Se a biblioteca falhar por completo, usa o alert comum e não trava o site
    if (!Swal) {
        alert(mensagem);
        return;
    }

    Swal.fire(mensagem); // <--- Linha 32 corrigida!
    
    if(timerInterval){
        clearInterval(timerInterval);
    }
}
