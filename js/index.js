let serial = 0;

// Show Calculation Data Function
function showData(geometryName, geometryResult) {
    const tableToday = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${geometryResult}cm<sup>2</sup></td>
    <td><button class="btn btn-sm">Convert to m<sup>2</sup></button></td>
    
    `
    tableToday.appendChild(tr)
}

// Get Input Value Function
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

// Get Element Value Function
function getElementValueById(elementId) {
    const elementValueString = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}


