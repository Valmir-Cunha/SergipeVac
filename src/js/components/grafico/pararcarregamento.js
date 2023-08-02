export function substituirElemento() {
    const container = document.createElement('div');
    container.classList.add('elementos-graficos');

    const graficoDiv = document.createElement('div');
    graficoDiv.id = 'grafico';
    graficoDiv.className ="row align-vertical mb-6";

    const svg = document.createElement('svg');
    svg.id = 'chart';

    graficoDiv.appendChild(svg);
    container.appendChild(graficoDiv);

    const elementoExistente = document.querySelector('.text-center');
    elementoExistente.parentNode.replaceChild(container, elementoExistente);
}

export function substituirCodigo() {
    var divElementosGraficos = document.getElementsByClassName('elementos-graficos')[0];
    divElementosGraficos.innerHTML = '<div class="text-center mt-5">' +
        '  <div class="spinner-border" role="status">' +
        '    <span class="sr-only">Carregando...</span>' +
        '  </div>' +
        '</div>';
}
