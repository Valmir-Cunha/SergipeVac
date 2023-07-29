const width = 800;
const height = 600;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .center([-37.5, -10.5])
    .scale(8000)
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

d3.json("../js/components/geojs-28-mun.json").then(function (geojson) {
    const dadosCidades = [
        { cidade: "Aracaju", usuarios: 8 },
        { cidade: "Nossa Senhora das Dores", usuarios: 10 }
    ];

    const maxUsuarios = d3.max(dadosCidades, d => d.usuarios);

    const colorScale = d3.scaleSequential(d3.interpolateBlues)
        .domain([0, maxUsuarios]);

    const tooltip = d3.select("#map")
        .append("div")
        .style("position", "absolute")
        .style("pointer-events", "none")
        .style("opacity", 0);

    svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", (d) => {
            const cidade = dadosCidades.find(c => c.cidade === d.properties.name);
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