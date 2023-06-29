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

async function fetchData(endpoint) {
  const requisicao = new scriptRequisicaoBackend();
  const json = await requisicao[endpoint]();
  return json;
}

async function renderChart() {
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
        const json = await fetchData('ObterContagemPorEtnia');
        data = json.map(item => ({
          label: item.pacienteRacaCorValor,
          value: item.totalPacientes
        }));
      }
      break;
    case 2:
      {
        const json = await fetchData('ObterContagemPorEstabelecimento');
        data = json.map(item => ({
          label: item.estabelecimento,
          value: item.frequencia
        }));
      }
      break;
    case 3:
      {
        const json = await fetchData('ObterContagemPorGrupo');
        data = json.map(item => ({
          label: item.vacinaGrupoAtendimentoNome,
          value: item.frequencia
        }));
      }
      break;
    case 4:
      {
        const json = await fetchData('ObterContagemPorEtnia');
        data = json.map(item => ({
          label: item.pacienteRacaCorValor,
          value: item.totalPacientes
        }));
      }
      break;
    case 5:
      {
        const json = await fetchData('ObterContagemPorSexo');
        data = json.value.map(item => ({
          label: item.sexoBiologico,
          value: item.totalPacientes
        }));
      }
      break;
    case 6:
      {
        const json = await fetchData('ObterContagemPorDose');
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
    case 3:
    case 4:
      chartRenderer.renderBarChart();
      break;
    case 2:
    case 5:
    case 6:
      chartRenderer.renderPieChart();
      break;
    default:
      chartRenderer.renderBarChart();
      break;
  }
}

renderChart();

// Obtenha uma referência para o botão
const botaoAplicarFiltro = document.getElementById('aplicar-filtro');

function requisicaoPersonalizada(){
  substituirCodigo()
  
  const inputAnoInicial = document.getElementById('data-inicial').value;
  const inputAnoFinal = document.getElementById('data-final').value;
  
  console.log(inputAnoInicial,inputAnoFinal)
  
  // renderChart();
}

// Adicione um ouvinte de evento de clique ao botão
botaoAplicarFiltro.addEventListener('click', requisicaoPersonalizada);
