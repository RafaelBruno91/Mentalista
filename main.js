var numeroShh = parseInt(Math.random() * 101);
var resposta = document.getElementById("resultado");

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroShh) {
        resposta.innerHTML = "boa, você acertou";
    } else if (chute > 100 || chute < 0) {
        resposta.innerHTML = "opa, só números de 0 a 100";
    }
    if (chute > numeroShh) {
        resposta.innerHTML = "dica, o número correto é menor que " + chute;
    } else if (chute < numeroShh) {
        resposta.innerHTML = "dica, o número correto é maior que " + chute;
    }
}
