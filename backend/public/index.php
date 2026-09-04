<?php

header("Content-Type: application/json");

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

