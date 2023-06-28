import { scriptRequisicaoBackend } from '../service/scriptRequisicaoBackend.js'

const data = [
    { label: "A", value: 10 },
    { label: "B", value: 20 },
    { label: "C", value: 15 },
    { label: "D", value: 25 },
    { label: "E", value: 18 }
];

const width = window.innerWidth * 0.75;
const height = window.innerHeight * 0.5;


// Criação do SVG
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Escalas
const xScale = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, width])
    .padding(0.2);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height, 0]);

// Criação das barras
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.label))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - yScale(d.value))
    .attr("fill", "steelblue");

// Eixos
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("form", `translate(0, ${height})`)
    .call(xAxis);

svg.append("g")
    .call(yAxis);

const requisicao = new scriptRequisicaoBackend()

let json = await requisicao.ObterContagemPorEtnia()

console.log(json)

