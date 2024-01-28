function criptografarTexto(texto) {
    // Lógica de criptografia
    // Substituições conforme as regras fornecidas
    const cripto = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return cripto;
}
// Função para descriptografar
function descriptografarTexto(textoCriptografado) {
    // Lógica de descriptografia
    // Substituições inversas
    const descripto = textoCriptografado
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
    return descripto;
}

document.getElementById('criptografar').addEventListener('click', function () {
    const textoOriginal = document.getElementById('texto').value;
    const textoCriptografado = criptografarTexto(textoOriginal);
    document.getElementById('resultado').innerText = textoCriptografado;
});

document.getElementById('descriptografar').addEventListener('click', function () {
    const textoCriptografado = document.getElementById('texto').value;
    const textoDescriptografado = descriptografarTexto(textoCriptografado);
    document.getElementById('resultado').innerText = textoDescriptografado;
});

document.getElementById('copiar').addEventListener('click', function () {
    const mensagem = document.getElementById('resultado');
    const areaTransferencia = document.createElement('textarea');
    areaTransferencia.value = mensagem.innerText;
    document.body.appendChild(areaTransferencia);
    areaTransferencia.select();
    document.execCommand('copy');
    document.body.removeChild(areaTransferencia);
});
