import React, { useRef, useEffect, useContext } from "react";
import { select, arc, pie } from "d3";
import useResizeObserver from "../utils/useResizeObserver";
import { AppContext } from "../context/AppContext";

export default function GaugeChart() {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const { expenses, budget } = useContext(AppContext);

  // Understand reduce
  const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost)
  }, 0);
  
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    
    const remaining = budget - totalExpenses;
    const gaugeData = [ remaining, totalExpenses ];

    if (!dimensions) return;

    const arcGenerator = arc()
      .innerRadius(75)
      .outerRadius(150);

    const pieGenerator = pie()
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI)
      .sort(null);

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
        `translate(${dimensions.width / 2}px, ${dimensions.height}px)`
      )
      .attr("d", arcGenerator);
      

    // draw the gauge
  }, [budget, dimensions, totalExpenses]);
  
  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}
