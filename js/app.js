// import the data
//const tableData = data;

//console.log(tableData);

// connect with the table <tbody> in HTML
var tbody = d3.select('tbody');
//console.log(tbody);

//console.log(tbody);
//console.log(data);
function buildTable(data) {
    tbody.html("");
    data.forEach(function(row) {
        //var tbody = d3.select('tbody');
        var trow = tbody.append('tr');
        Object.values(row).forEach(function(data) {
            cell = trow.append('td');
            cell.text(data);
        });
    })
}

buildTable(data);




