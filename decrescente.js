let numDecrescente = [0, 0, 0, 0, 0, 0, 0];
let valor_atual = 0;

function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarArrayDecrescente() {
    for(let i = 0; i < numDecrescente.length; i++) {
        numDecrescente[i] = gerarAleatorio(15, 1);
    }
    document.getElementById('resultadoDecrescente').textContent = numDecrescente.join(', ');
}

function ordenarDecrescente() {
    for(let j = numDecrescente.length-1; j > 0; j--) {
        for(let i = 0; i < numDecrescente.length-1; i++) {
            if(numDecrescente[i] < numDecrescente[i+1]) {
                valor_atual = numDecrescente[i];
                numDecrescente[i] = numDecrescente[i+1];
                numDecrescente[i+1] = valor_atual;
            }
        }
    }
    document.getElementById('resultadoDecrescente').textContent = numDecrescente.join(', ');
}
