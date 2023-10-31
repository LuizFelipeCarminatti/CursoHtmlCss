function mudaFoto(foto) {
    document.getElementById('icone').src = foto
}

function calc() {
    var qtd = parseInt(document.getElementById('qtd').value)
    let total = qtd * 1500;
    var preco = document.getElementById('preco').value = total
}