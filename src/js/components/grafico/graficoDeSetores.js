import { substituirElemento } from './pararcarregamento.js';

export class PieChart {
  constructor(data, containerId) {
    this.data = data;
    this.containerId = containerId;
    this.width = window.innerWidth;
    this.height = window.innerHeight * 0.5;
    this.radius = Math.min(this.width, this.height) / 2;
    this.legendWidth = 150;
    this.legendPadding = 10;
    this.colorScale = d3.scaleLinear()
      .domain([0, 9])
      .range(["#0b0147", "#1f77b4"]);
  }

  render() {
    substituirElemento();

    const marginTop = 30;

    const svg = d3.select(`#${this.containerId}`)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height + marginTop)
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${(this.height / 2) + marginTop})`);

    const arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius);

    const pie = d3.pie()
      .value(d => d.value);

    const slices = svg.selectAll("slice")
      .data(pie(this.data))
      .enter()
      .append("g")
      .attr("class", "slice");

    slices.append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d, i) => this.colorScale(i));

    const labelOffset = 20;

    const labelsOutside = slices.filter(d => {
      const percent = (d.data.value / d3.sum(this.data, d => d.value)) * 100;
      return percent < 5;
    });

    labelsOutside.append("text")
      .attr("transform", d => {
        const [x, y] = arcGenerator.centroid(d);
        const midAngle = Math.atan2(y, x);
        const xOutside = Math.cos(midAngle) * (this.radius + labelOffset);
        const yOutside = Math.sin(midAngle) * (this.radius + labelOffset);
        return `translate(${xOutside}, ${yOutside})`;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .style("font-weight", "bold")
      .style("fill", "black")
      .attr("dy", "1.5em")
      .text(d => {
        const percent = (d.data.value / d3.sum(this.data, d => d.value)) * 100;
        if (percent < 5) {
          return `${percent.toFixed(2)}%`;
        }
        return null;
      });

    slices.append("text")
      .attr("transform", d => {
        const [x, y] = arcGenerator.centroid(d);
        const midAngle = Math.atan2(y, x);
        const xInside = Math.cos(midAngle) * (this.radius / 2);
        const yInside = Math.sin(midAngle) * (this.radius / 2);
        return `translate(${xInside}, ${yInside})`;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .style("font-weight", "bold")
      .attr("fill", "white")
      .text(d => {
        const percent = (d.data.value / d3.sum(this.data, d => d.value)) * 100;
        if (percent >= 5) {
          return `${percent.toFixed(2)}%`;
        }
        return "";
      });

    const legendOffsetX = -this.width / 2 + 20;
    const legendOffsetY = -this.height / 2 + 20;

    const legend = svg.selectAll(".legend")
      .data(this.data)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${legendOffsetX}, ${i * 20 + legendOffsetY})`);

    legend.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d, i) => this.colorScale(i));

    legend.append("text")
      .attr("x", 20)
      .attr("y", 5)
      .attr("dy", "0.4em")
      .style("font-weight", "bold")
      .text(d => d.label);
  }
}
