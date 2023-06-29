export class BarChart {
  constructor(data, containerId) {
    this.data = data;
    this.containerId = containerId;
    this.width = window.innerWidth * 0.75;
    this.height = window.innerHeight * 0.5;
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
  }

  render() {
    const svg = d3.select(`#${this.containerId}`)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    const chartWidth = this.width - this.margin.left - this.margin.right;
    const chartHeight = this.height - this.margin.top - this.margin.bottom;

    const chartGroup = svg.append("g")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

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
      .attr("fill", "steelblue");

    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(xAxis);

    chartGroup.append("g")
      .call(yAxis);
  }
}
