export function substituirElemento() {
    const container = document.createElement('div');
    container.classList.add('elementos-graficos');
  
    const graficoDiv = document.createElement('div');
    graficoDiv.id = 'grafico';
  
    const svg = document.createElement('svg');
    svg.id = 'chart';
  
    graficoDiv.appendChild(svg);
    container.appendChild(graficoDiv);
  
    const elementoExistente = document.querySelector('.text-center');
    elementoExistente.parentNode.replaceChild(container, elementoExistente);
}
  