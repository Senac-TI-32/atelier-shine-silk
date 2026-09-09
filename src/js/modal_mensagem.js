
// Importa o SweetAlert2 (usando o link de módulo que funciona em qualquer lugar)
import Swal from 'https://jsdelivr.net';

// Exporta uma função que você pode chamar de qualquer lugar do projeto
export function exibirAlerta(titulo, mensagem, tipo) {
    return Swal.fire({
        title: titulo,
        text: mensagem,
        icon: tipo, // 'success', 'error', 'warning', 'info'
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok"
    });
}



// 1. Importa o SweetAlert2 no topo do arquivo para ele funcionar aqui dentro
import Swal from 'https://jsdelivr.net';

let timerInterval;

// 2. Adicione "export" antes da função mensagemEspera
export function mensagemEspera(titulo, mensagem, tempo){
    Swal.fire({
        title: titulo,
        html: mensagem,
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

// 3. Adicione "export" antes da função mensagemGenerica
export function mensagemGenerica(mensagem){
    Swal.fire(mensagem);
    if(timerInterval){
        clearInterval(timerInterval);
    }
}
