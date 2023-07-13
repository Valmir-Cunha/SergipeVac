import { BarChart } from './graficoDebarras.js';
import { PieChart } from './graficoDeSetores.js';
import { scriptRequisicaoBackend } from '../service/scriptRequisicaoBackend.js';

import { substituirCodigo } from './pararcarregamento.js';



class ChartRenderer {
  constructor(data, containerId) {
    this.data = data;
    this.containerId = containerId;
  }

  renderBarChart() {
    const barChart = new BarChart(this.data, this.containerId);
    barChart.render();
  }

  renderPieChart() {
    const pieChart = new PieChart(this.data, this.containerId);
    pieChart.render();
  }
}

async function fetchData(endpoint,inputAnoInicial=null,inputAnoFinal=null) {
  const requisicao = new scriptRequisicaoBackend();
  const json = await requisicao[endpoint](inputAnoInicial,inputAnoFinal);
  return json;
}

async function renderChart(inputAnoInicial=null,inputAnoFinal=null) {
  const divTituloElements = document.querySelectorAll('.titulo');
  const divTituloElement = Array.from(divTituloElements).find(element => element !== null);
  console.log(divTituloElements)
  
  if (!divTituloElement) {
    console.log('Div not found');
    return;
  }

  const divTituloId = parseInt(divTituloElement.id);

  let data;

  switch (divTituloId) {
    case 1:
      {
        const json = await fetchData('ObterContagemPorEtnia',inputAnoInicial,inputAnoFinal);
        data = json.map(item => ({
          label: item.etnia,
          value: item.quantidadeVacinados
        }));
      }
      break;
    case 2:
      {
        const json = await fetchData('ObterContagemPorEstabelecimento',inputAnoInicial,inputAnoFinal);
        data = json.map(item => ({
          label: item.estabelecimento,
          value: item.frequencia
        }));
      }
      break;
    case 3:
      {
        const json = await fetchData('ObterContagemPorGrupo',inputAnoInicial,inputAnoFinal);
        data = json.map(item => ({
          label: item.grupoAtendimento,
          value: item.frequencia
        }));
      }
      break;
    case 4:
      {
        const json = await fetchData('ObterContagemPorCategoria',inputAnoInicial,inputAnoFinal);
        data = json.map(item => ({
          label: item.categoria,
          value: item.frequencia
        }));
      }
      break;
    case 5:
      {
        const json = await fetchData('ObterContagemPorSexo',inputAnoInicial,inputAnoFinal);
        console.log(json)
        data = json.map(item => ({
          label: item.sexoBiologico.valor,
          value: item.totalPacientes
        }));
      }
      break;
    case 6:
      {
        const json = await fetchData('ObterContagemPorDose',inputAnoInicial,inputAnoFinal);
        data = json.map(item => ({
          label: item.vacinaDescricaoDose,
          value: item.totalPacientes
        }));
      }
      break;
    default:
      data = [];
      break;
  }

  if (data.length === 0) {
    console.log('Invalid data');
    return;
  }

  const chartRenderer = new ChartRenderer(data, 'chart');

  switch (divTituloId) {
    case 1:
    case 5:
    case 6:
      chartRenderer.renderBarChart();
      break;
    default:
      chartRenderer.renderPieChart();
      break;
  }
}

renderChart();


const botaoAplicarFiltro = document.getElementById('aplicar-filtro');

function requisicaoPersonalizada(){
  substituirCodigo()
  
  const inputAnoInicial = document.getElementById('data-inicial').value;
  const inputAnoFinal = document.getElementById('data-final').value;
  
  console.log(inputAnoInicial,inputAnoFinal)
  
  renderChart(inputAnoInicial,inputAnoFinal)
}

botaoAplicarFiltro.addEventListener('click', requisicaoPersonalizada);