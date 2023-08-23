import { substituirElemento } from './pararcarregamento.js';

export class BarChart {
  constructor(data, containerId) {
    this.data = data;
    this.containerId = containerId;
    this.width = 1000;
    this.height = 450;
    this.margin = { top: 30, right: 0, bottom: 20, left: 200 };
  }

  render() {
    substituirElemento();
  
    const svg = d3.select(`#${this.containerId}`)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

    const chartWidth = this.width - this.margin.left - this.margin.right;
    const chartHeight = this.height - this.margin.top - this.margin.bottom;

    const chartGroup = svg.append("g");

    const xScale = d3.scaleBand()
      .domain(this.data.map(d => d.label))
      .range([0, chartWidth])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.value)])
      .range([chartHeight, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    chartGroup.selectAll("rect")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.label))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => chartHeight - yScale(d.value))
      .attr("fill", "#0b0147")
      .style("border-top-left-radius", "4px")
      .style("border-top-right-radius", "4px");

    chartGroup.selectAll(".bar-label")
      .data(this.data)
      .enter()
      .append("text")
      .text(d => d.value)
      .attr("class", "bar-label")
      .attr("x", d => xScale(d.label) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.value) - 5)
      .attr("text-anchor", "middle")
      .style("font-weight", "bold");

    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(xAxis)
      .selectAll("text")
      .style("font-weight", "bold");

    chartGroup.append("g")
      .call(yAxis)
      .selectAll("text")
      .style("font-weight", "bold");
  }
}
