import { scriptRequisicaoBackend } from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

let json = await requisicao.ObterContagemPorEtnia()

console.log(json)

const data = json.map(item => ({
    label: item.pacienteRacaCorValor,
    value: item.totalPacientes
}));


// const data = [
//     { label: "A", value: 10 },
//     { label: "B", value: 20 },
//     { label: "C", value: 15 },
//     { label: "D", value: 25 },
//     { label: "E", value: 18 }
// ];

// Configurações do gráfico
const width = window.innerWidth * 0.75;
const height = window.innerHeight * 0.5;
const radius = Math.min(width, height) / 2;

// Elemento SVG
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g") // Grupo para centralizar o gráfico
    .attr("transform", `translate(${width / 2}, ${height / 2})`); // Centralizar o gráfico

// Função geradora de arcos
const arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

// Função geradora de cores
const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// Criação do gráfico de pizza
const pie = d3.pie()
    .value(d => d.value);

const slices = svg.selectAll("slice")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "slice");

slices.append("path")
    .attr("d", arcGenerator)
    .attr("fill", (d, i) => colorScale(i));

slices.append("text")
    .attr("transform", d => {
        const [x, y] = arcGenerator.centroid(d);
        const midAngle = Math.atan2(y, x);
        const xOutside = Math.cos(midAngle) * (radius + labelOffset);
        const yOutside = Math.sin(midAngle) * (radius + labelOffset);
        return `translate(${xOutside}, ${yOutside})`;
    })
    .attr("text-anchor", "middle")
    .text(d => d.data.value);
