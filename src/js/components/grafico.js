import { BarChart } from './graficoDebarras.js'
import { PieChart } from './graficoDeSetores.js'

import {atribuirValorParaDivs} from './quantidades.js'

import {scriptRequisicaoBackend} from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

let divTitulo =0;

let json


const data = json.map(item => ({
    label: item.pacienteRacaCorValor,
    value: item.totalPacientes
  }));
  
  


for (let i = 1; i < 7; i++) {
    if (document.getElementById(i.toString())!=null) {
      divTitulo = i
      break; 
    }
  }

  switch (divTitulo) {
    case 1:
        json = await requisicao.ObterContagemPorEtnia()
      break;
    case 2:
        json = await requisicao.ObterContagemPorVacina()
      break;
    case 3:
        json = await requisicao.ObterContagemPorGrupo()
      break;
    case 4:
        json = await requisicao.ObterContagemPorEtnia()
    break;
    case 5:
        json = await requisicao.ObterContagemPorSexo()
    break;
    case 6:
        json = await requisicao.ObterContagemPorDose()
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
  



// let json = await requisicao.ObterContagemPorEtnia()

// console.log(json)

// const data = json.map(item => ({
//     label: item.pacienteRacaCorValor,
//     value: item.totalPacientes
//   }));
  
  

// if (divTitulo.textContent.includes("racial")) {
//     graficosetores.render()
// } else {
//     graficobarras.render()
// }

// function somaquantidade(json) {
    
//     let soma = json.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue.totalPacientes;
//       }, 0);
    
//     return soma;
// }


// const valores = {
//     vacinados: somaquantidade(json),
//     estabelecimentos: "3.000.000",
//     estrangeiros: "3.000.000",
//     doses: "3.000.000"
// };

// atribuirValorParaDivs(valores)