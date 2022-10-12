import React, { useRef, useEffect, useContext } from "react";
import { select, arc, pie } from "d3";
import { AppContext } from "../../context/AppContext";
import getTotalExpenses from "../../utils/getTotalExpenses";

export default function GaugeChart() {
  const svgRef = useRef();
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = getTotalExpenses(expenses);
  
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const height = 150;
    const width = 150;
    
    const remaining = budget - totalExpenses;
    const gaugeData = [ remaining, totalExpenses ];
    
    const arcGenerator = arc()
    // Size of arc
      .innerRadius(75)
      .outerRadius(150);

    const pieGenerator = pie()
    // Adjusts the start and end angle of the pie chart 
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI)
      .sort(null);

    // Instructions for the gaugeData to display properly into the chart
    const instructions = pieGenerator(gaugeData);

    svg
      .selectAll(".slice")
      .data(instructions)
      .join("path")
      .attr("class", "slice")
      .attr("width", "500")
      .attr("fill", (instruction, index) => (index === 0 ? "#cea6d9" : "#eee"))
      .style('overflow', 'visible')
      .style(
        "transform",
        `translate(${height}px, ${width}px)`
      )
      .attr("d", arcGenerator);
      

  }, [budget, totalExpenses]); // If these values updates, the gauge will update
  
  return (
    <div style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}
