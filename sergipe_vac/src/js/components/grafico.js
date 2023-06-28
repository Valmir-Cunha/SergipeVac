import { BarChart } from './graficoDebarras.js'
import { PieChart } from './graficoDeSetores.js'

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