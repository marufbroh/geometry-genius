let serial = 0;

// Show Calculation Data Function
function showData(geometryName, geometryResult) {
    const tableToday = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${geometryResult}m<sup>2</sup></td>
    <td><button class="btn btn-sm">Convert to m<sup>2</sup></button></td>
    
    `
    tableToday.appendChild(tr)
}


