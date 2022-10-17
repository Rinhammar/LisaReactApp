import React, { useEffect, useRef, useContext } from 'react';
import * as d3 from 'd3';
import { AppContext } from "../../context/AppContext";
import getTotalExpenses from "../../utils/getTotalExpenses";

export default function BarChart() {
  const svgBandRef = useRef();
  const { expenses } = useContext(AppContext);

  // In order for the bars to update when adding and expense, we have to look at the total expenses. 
  // The variable is added at the bottom of the useEffect in order to see when it updates.
  const totalExpenses = getTotalExpenses(expenses);

  const barChartData = expenses;

  useEffect(() => {
    const svg = d3.select(svgBandRef.current);
    const height = 300;
    const width = 600;
    

    // Bar scales
    const scaleX = d3.scaleBand()
      .domain(barChartData.map((value) => value.name))
      .range([0, width])
      .paddingInner([0.352]);

    const max = d3.max(barChartData, function(d){return d.cost})

    // Colours for the bars
    const colours = ['#e07373','#eea545', '#e4ee57', '#7fc97f','#5ac4b5', '#387794', '#c36adb','#e45ca4', '#a32f2f', '#c49d4a'];
    // Styling for the chart
    const toolDiv = d3.select('#chartArea')
                      .append('div')
                      .style('visibility', 'hidden')
                      .style('position', 'absolute')
                      .style('background-color', 'white')
                      .style('border', '2px solid black')
                      .style('border-radius', '5px')
                      .style('padding', '5px')
    const scaleY = d3.scaleLinear()
      .domain([0, max])
      .range([height, 0]);

    // X-axis with names of expenses
    svg
    .select('.x-axis')
    .style('transform', `translateY(${height}px)`)
    .call(d3.axisBottom(scaleX)
    .tickSizeOuter(0))
    .selectAll('text')
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .attr('x', 1)
      .attr('y', 15);

    // Y-axis with numbers
    svg
    .select('.y-axis')
    .call(d3.axisLeft(scaleY)
    .tickPadding(5))
    .style('font-size', '14px');

    // Title for y-axis 
    svg.select('.y-text')
      .attr('text-anchor', 'middle')
      .attr('y', -70)
      .attr('x', - (height /2))
      .attr('transform', 'rotate(-90)')
      .text('Cost (in sek)')
      .style('letter-spacing', '8px')
      .style('font-size', '20px');

    // Title for x-axis 
    svg.select('.x-text')
      .attr('text-anchor', 'middle')
      .attr('x', width / 2)
      .attr('y', height + 80)
      .text('Expenses')
      .style('letter-spacing', '8px')
      .style('font-size', '20px');

    // Bars
    svg
    .selectAll('.bar')
      .data(barChartData)
      .join('rect')
      .attr('class', 'bar')
      .style('transform', 'scaleY(-1)')
      // Fills the bars with colours from the array
      .attr('fill', function (d, i) {
        return colours[i];
     })
    //  Adds tooltip on hover that shows the name and cost of the expense
      .on('mouseover', (e,d) => {
          toolDiv.style('visibility', 'visible')
                 .text(` ${d.name}: ${d.cost} sek`)
      })
      // Adjusts the location of the tooltip when the user moves their mouse over the bar (it stays in the same position relative to the mouse pointer)
      .on('mousemove', (e,d) =>{
          toolDiv.style('top', (e.pageY - 175) + 'px')
                 .style('left', (e.pageX + 25) + 'px')
      })
      // Changes visibility to hidden when the mouse pointer leaves the bar
      .on('mouseout',()=>{
          toolDiv.style('visibility', 'hidden')
      })
      .attr('x', (value) => scaleX(value.name))
      .attr('y', -height)
      .attr('width', scaleX.bandwidth())
      .transition()
      .duration(4000)
      .ease(d3.easeCircleInOut)
      .attr('height', (value) => height - scaleY(value.cost));
  }, [barChartData, expenses, totalExpenses]);
  
  return (
    <>
      <div id='chartArea'>
        <svg
              style={{
                overflow: 'visible', width: 600, height: 300, marginBottom: 120
              }}
              ref={svgBandRef}
        >
          <g className="x-axis" />
          <g className="y-axis" />
          <text className="x-text" />
          <text className="y-text" />
        </svg>
      </div>
    </>
  );
}
