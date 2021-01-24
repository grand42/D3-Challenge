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
});  
});