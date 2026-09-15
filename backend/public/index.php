<?php

/* header("Content-Type: application/json");

// Captura o pacote enviado pelo JS
$jsonRecebido = file_get_contents("php://input");
$dados = json_decode($jsonRecebido, true);

if ($dados) {
    // Captura todas as variáveis com segurança
    $nome = $dados['nome'];
    $email = $dados['email'];
    $phone = $dados['phone'];
    $mensagem = $dados['mensagem'];

    // Devolve a resposta de sucesso em formato JSON
    echo json_encode([
        "status" => true,
        "mensagem" => "Dados de $nome recebidos com sucesso!"
    ]);
} else {
    echo json_encode([
        "status" => false,
        "mensagem" => "Nenhum dado foi recebido pelo servidor."
    ]);
}

*/






header('Content-Type: application/json');

// Importa o PHPMailer (ajuste o caminho se necessário)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';// Composer



$jsonRecebido = file_get_contents('php://input');
$dados = json_decode($jsonRecebido, true);

if ($dados) {
    $nome = $dados['nome'];
    $email = $dados['email'];
    $phone = $dados['phone'];
    $mensagem = $dados['mensagem'];

    // Configuração do PHPMailer para o Gmail
    $mail = new PHPMailer(true);

    try {
        //$mail->SMTPDebug = 2;/ Desativado porque o envio já funcionou!
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        

        
        // SEU EMAIL DO GMAIL AQUI
        $mail->Username   = 'mauhonorat@gmail.com'; 
        
        // SUA SENHA DE APLICATIVO DO GMAIL AQUI (sem espaços)
        $mail->Password   = ''; 
        
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Remetente e Destinatário
        $mail->setFrom('mauhonorat@gmail.com', $nome);
        $mail->addAddress('mauhonorat@gmail.com'); // Onde você quer receber

        // Conteúdo do Email
        $mail->isHTML(true);
        $mail->Subject = "Nova mensagem de: $nome";
        $mail->Body    = "Nome: $nome<br>Email: $email<br>Telefone: $phone<br>Mensagem: $mensagem";

        $mail->send();

        echo json_encode([
            'status' => true, 
            'mensagem' => "Dados de $nome recebidos e email enviado com sucesso!"
        ]);

    }  catch (Exception $e) {
         echo json_encode([
            'status' => false, 
            'mensagem' => "Erro ao enviar email: {$mail->ErrorInfo}"
        ]);
    }



} else {
    echo json_encode([
        'status' => false, 
        'mensagem' => 'Nenhum dado foi recebido pelo servidor.'
    ]);
}

