import { BarChart } from './graficoDebarras.js'
import { PieChart } from './graficoDeSetores.js'

import {scriptRequisicaoBackend} from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

let divTitulo =0;

let json


let data
  
  


for (let i = 1; i < 7; i++) {
    if (document.getElementById(i.toString())!=null) {
      divTitulo = i
      break; 
    }
  }

  switch (divTitulo) {
    case 1:
        json = await requisicao.ObterContagemPorEtnia()
        data = json.map(item => ({
          label: item.pacienteRacaCorValor,
          value: item.totalPacientes
        }));
      break;
    case 2:
        json = await requisicao.ObterContagemPorEstabelecimento()
        data = json.map(item => ({
          label: item.estabelecimento,
          value: item.frequencia
        }));
      break;
    case 3:
        json = await requisicao.ObterContagemPorGrupo()
        data = json.map(item => ({
          label: item.vacinaGrupoAtendimentoNome,
          value: item.frequencia
        }));
      break;
    case 4:
        json = await requisicao.ObterContagemPorEtnia()
        data = json.map(item => ({
          label: item.pacienteRacaCorValor,
          value: item.totalPacientes
        }));
    break;
    case 5:
        json = await requisicao.ObterContagemPorSexo()
        data = json.map(item => ({
          label: item.sexoBiologico,
          value: item.totalPacientes
        }));
    break;
    case 6:
        json = await requisicao.ObterContagemPorDose()
        data = json.map(item => ({
          label: item.vacinaDescricaoDose,
          value: item.totalPacientes
        }));
    break;
    default:
        json ="0"
     break;
}



const graficobarras = new BarChart(data, "chart")
const graficosetores = new PieChart(data, "chart")

switch (divTitulo) {
    case 1:
      graficobarras.render()
      break;
    case 2:
      graficobarras.render()
      break;
    case 3:
        graficobarras.render()
      break;
    case 4:
        graficosetores.render()
    break;
    case 5:
        graficosetores.render()
    break;
    case 6:
        graficosetores.render()
    break;
    default:
        graficobarras.render()
     break;
}
  