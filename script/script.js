// Funçao para criptografar o texto
function criptografarTexto(texto) {
    // Substituições conforme as regras fornecidas
    const cripto = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return cripto;
}

// Funçao para descriptografar o texto
function descriptografarTexto(textoCriptografado) {
    // Substituições inversas
    const descripto = textoCriptografado
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
    return descripto;
}

function processarTexto(operacao) {
    // Obtem o texto original do elemento de texto
    const textoOriginal = document.getElementById('texto').value;

    // executa a operação (criptografar ou descriptografar) com base no argumento
    const resultado = (operacao === 'criptografar') ? criptografarTexto(textoOriginal) : descriptografarTexto(textoOriginal);

    // exibe o resultado no elemento de resultado
    document.getElementById('resultado').value = resultado;

    esconderMsg();
}

// ouvinte botão de criptografar
document.getElementById('criptografar').addEventListener('click', function () {
    processarTexto('criptografar');
});

// ouvinte botão de descriptografar
document.getElementById('descriptografar').addEventListener('click', function () {
    processarTexto('descriptografar');
});

// Adiciona um ouvinte botão de copiar
document.getElementById('copiar').addEventListener('click', function () {
    // obtem a mensagem do elemento de resultado
    const mensagem = document.getElementById('resultado');
    // Cria uma área de transferência temporária
    const areaTransferencia = document.createElement('textarea');
    // define o valor da área de transferência como a mensagem
    areaTransferencia.value = mensagem.value;
    // Adiciona a área de transferencia ao corpo do documento
    document.body.appendChild(areaTransferencia);
    // seleciona o texto na area de transferência
    areaTransferencia.select();
    // executa o comando de cópia
    document.execCommand('copy');
    // remove a area de transferência temporaria
    document.body.removeChild(areaTransferencia);
});

// Função para modificar o Right-Sction
function esconderMsg() {
    // esconde a imagem
    document.querySelector('.img-looking').style.display = 'none';
    // Mostra o botão de copiar
    document.getElementById('copiar').style.display = 'block';
    // esconde o titulo
    document.querySelector('h1').style.display = 'none';
    // mostra a caixa de texto com o resultado
    document.getElementById('resultado').style.display = 'block';
    // esconde a outra mensagem dessa caixa
    document.querySelector('h2').style.display = 'none';
}
