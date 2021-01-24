//Make Responsive
function makeResponsive(){
    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;  
    var margin = {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50
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
d3.cvesv("assets/data/data.csv").then(function(statedata) {
    console.log(statedata);
// Cast each column as a number using the unary + operator
statedata.forEach(function(data) {
    data.age = +data.age;
    data.healthcare = +data.healthcare;
    data.income = +data.income;
    data.obesity = +data.obesity;
    data.poverty = +data.poverty;
    data.smokes = +data.smokes;
    console.log("Age:",data.age);
});  
});
};