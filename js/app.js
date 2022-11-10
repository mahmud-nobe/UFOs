// import the data
const tableData = data;

// connect with the table <tbody> in HTML
var tbody = d3.select('tbody');


function buildTable(data) {
    tbody.html("");
    data.forEach(element => {
        var row = tbody.append('tr');
        
        Object.values(element).forEach( value => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}

buildTable(tableData);

// connect with the filer button
var filter = d3.select("#filter-btn");


function handleClick(event) {
    var date = d3.select('#datetime').property('value');
    
    var filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(data_row => data_row.datetime == date);
    }

    buildTable(filteredData);

}

// change the data based on the filter value
filter.on('click', handleClick);





