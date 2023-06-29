import { BarChart } from './graficoDebarras.js'
import { PieChart } from './graficoDeSetores.js'

import {atribuirValorParaDivs} from './quantidades.js'

import {scriptRequisicaoBackend} from '../service/scriptRequisicaoBackend.js'

const divTitulo = document.getElementById("titulo");

const requisicao = new scriptRequisicaoBackend()

let json = await requisicao.ObterContagemPorEtnia()

console.log(json)

const data = json.map(item => ({
    label: item.pacienteRacaCorValor,
    value: item.totalPacientes
  }));
  
  
const graficobarras = new BarChart(data, "chart")
const graficosetores = new PieChart(data, "chart")

if (divTitulo.textContent.includes("racial")) {
    graficosetores.render()
} else {
    graficobarras.render()
}

function somaquantidade(json) {
    
    let soma = json.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.totalPacientes;
      }, 0);
    
    return soma;
}


const valores = {
    vacinados: somaquantidade(json),
    estabelecimentos: "3.000.000",
    estrangeiros: "3.000.000",
    doses: "3.000.000"
};

atribuirValorParaDivs(valores)