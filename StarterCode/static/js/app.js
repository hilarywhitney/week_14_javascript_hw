// from data.js
var tableData = data;

//Your code here
let tbody = d3.select("tbody");

// function to build a table

function buildTable(data) {
    // First Clear out existing data
    //Q: I get that tbody is the variable, but why is this .html?
    tbody.html("")
    data.forEach((dataRow) => {
        //console.table(dataRow)
        let row = tbody.append("tr");
        //console.log(row)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });

    })
}

// event: click that calls calls a function
function handleClick() { //function declaration
    d3.event.preventDefault();
    let date = d3.select('#datetime').property('value')
    let filterData = tableData

    //check to see if a date was entered
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    };
    buildTable(filterData);
}




buildTable(tableData)

//# because it is an ID
d3.selectAll('#filter-btn').on('click', handleClick)