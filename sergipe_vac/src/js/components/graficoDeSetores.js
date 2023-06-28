export class PieChart {
    constructor(data, containerId) {
        this.data = data;
        this.containerId = containerId;
        this.width = window.innerWidth * 0.75;
        this.height = window.innerHeight * 0.5;
        this.radius = Math.min(this.width, this.height) / 2;
        this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        this.labelOffset = -50; // Ajuste o valor de acordo com a preferência
    }

    render() {
        const svg = d3.select(`#${this.containerId}`)
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`);

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

        slices.append("text")
            .attr("transform", d => {
                const [x, y] = arcGenerator.centroid(d);
                const midAngle = Math.atan2(y, x);
                const xOutside = Math.cos(midAngle) * (this.radius + this.labelOffset);
                const yOutside = Math.sin(midAngle) * (this.radius + this.labelOffset);
                return `translate(${xOutside}, ${yOutside})`;
            })
            .attr("text-anchor", "middle")
            .text(d => d.data.value);
    }
}