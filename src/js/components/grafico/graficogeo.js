import { scriptRequisicaoBackendLocalizacao } from "../../service/scriptRequisicaoBackendLocalizacao.js";
import { substituirElemento } from './pararcarregamento.js';

class MapaCidades {
    constructor(width, height, dadosCidades, geojsonUrl) {
        this.width = width;
        this.height = height;
        this.dadosCidades = dadosCidades;
        this.geojsonUrl = geojsonUrl;
    }

    renderMapa() {
        substituirElemento();
        const svg = d3
            .select("#chart")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        const projection = d3.geoMercator()
            .center([-37.5, -10.5])
            .scale(8000)
            .translate([this.width / 2, this.height / 2]);

        const path = d3.geoPath().projection(projection);

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, d3.max(this.dadosCidades, d => d.usuarios)]);

        const tooltip = d3.select("#map")
            .append("div")
            .style("position", "absolute")
            .style("pointer-events", "none")
            .style("opacity", 0);

        d3.json(this.geojsonUrl).then(geojson => {
            svg.selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr("d", path)
                .style("fill", (d) => {
                    const cidade = this.dadosCidades.find(c => c.cidade === d.properties.name);
                    return cidade ? colorScale(cidade.usuarios) : "lightblue";
                })
                .style("stroke", "white")
                .style("stroke-width", 1)
                .on("mouseover", (event, d) => {
                    tooltip.transition().duration(200).style("opacity", 0.9);
                    tooltip.html(d.properties.name)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 30) + "px");
                })
                .on("mouseout", () => {
                    tooltip.transition().duration(200).style("opacity", 0);
                });
        });

        this.dadosCidades.sort((a, b) => b.quantidade - a.quantidade);

        const g = svg.append("g");

        g.selectAll("text")
            .data(this.dadosCidades)
            .enter()
            .append("text")
            .attr("x", this.width - 200)
            .attr("y", (d, i) => 200 + i * 20)
            .text((d) => `${d.cidade}: ${d.quantidade} usuários`)
            .style("fill", "black")
            .style("font-size", "19px");
    }
}

const width = 800;
const height = 500;

const requisicaoLocalizacao = new scriptRequisicaoBackendLocalizacao()


const json = await requisicaoLocalizacao.obterLocais()

console.log(json)

const dadosCidades = JSON.parse(JSON.stringify(json))

const geojsonUrl = "../js/archives/geojs-28-mun.json";

const mapa = new MapaCidades(width, height, dadosCidades, geojsonUrl);
mapa.renderMapa();
