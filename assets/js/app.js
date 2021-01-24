//Make Responsive
function makeResponsive(){
    var SVGarea = d3.select("body").select("svg");
      // clear svg is not empty
  if (!SVGarea.empty()) {
    SVGarea.remove();
  }
    
    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;  
    var margin = {
        top: 50,
        bottom: 50,
        right: 500,
        left: 30
    };
    
      var height = svgHeight - margin.top - margin.bottom;
      var width = svgWidth - margin.left - margin.right;
      // Append SVG element
  var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append group element
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Load Data from CSV
d3.csv("assets/data/data.csv").then(function(statedata) {
    console.log(statedata);
// Cast each column as a number using the unary + operator
statedata.forEach(function(data) {
    data.age = +data.age;
    data.healthcare = +data.healthcare;
    data.income = +data.income;
    data.obesity = +data.obesity;
    data.poverty = +data.poverty;
    data.smokes = +data.smokes;
    console.log("Obesity:",data.obesity);
    console.log("Poverty:", data.poverty);
});  

// Create Scales
var xScale = d3.scaleLinear()
    .domain([0, d3.max(statedata, d => d.poverty)])
    .range([0, width]);


var yScale = d3.scaleLinear()
    .domain([0, d3.max(statedata, d => d.obesity )])
    .range([height, 0]);

// Create Axes
var xaxis = d3.axisBottom(xScale);
var yaxis = d3.axisLeft(yScale);

// Append Axes
chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xaxis);

chartGroup.append("g")
    .call(yaxis);
});  
};  
// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);