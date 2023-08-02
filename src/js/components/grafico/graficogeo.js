import { scriptRequisicaoBackendLocalizacao } from "../../service/scriptRequisicaoBackendLocalizacao.js";
import { substituirElemento } from './pararcarregamento.js';

class MapaCidades {
    constructor(width, height, dadosCidades, geojsonUrl) {
        this.width = width;
        this.height = height;
        this.dadosCidades = dadosCidades;
        this.geojsonUrl = geojsonUrl;
    }

    async renderMapa() {
        substituirElemento();
        const svg = d3
            .select("#chart")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        const projection = d3.geoMercator()
            .center([-35.5, -10.5])
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

      
    }

    renderTabela() {
        const tabelaContainer = document.createElement("div");
        tabelaContainer.innerHTML = `
        <h2>Tabela de Dados</h2>
        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Acesso</th>
            </tr>
          </thead>
          <tbody>
            <!-- As linhas e células da tabela serão preenchidas pelo JavaScript -->
          </tbody>
        </table>
      `;
        
        document.querySelector("#grafico").appendChild(tabelaContainer);
    
        const tabelaBody = tabelaContainer.querySelector("tbody");
        console.log(tabelaBody);
        this.dadosCidades.forEach((d) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
          <td>${d.estado}</td>
          <td>${d.cidade}</td>
          <td>${d.quantidade}</td>
        `;
            tabelaBody.appendChild(linha);
            tabelaBody.className="col-md-6"
            
            const grafico = document.querySelector("#chart")
            grafico.className="col-md-6"
        });
    }
}

const width = 800;
const height = 500;

const requisicaoLocalizacao = new scriptRequisicaoBackendLocalizacao();
const json = await requisicaoLocalizacao.obterLocais();
const dadosCidades = JSON.parse(JSON.stringify(json));
const geojsonUrl = "../js/archives/geojs-28-mun.json";

const mapa = new MapaCidades(width, height, dadosCidades, geojsonUrl); 
await mapa.renderMapa();
mapa.renderTabela();