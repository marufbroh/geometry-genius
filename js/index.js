// Show Serial
let serial = 0;

// Show Calculation Data Function
function showData(geometryName, geometryResult) {
    const tableToday = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
    <td>${serial}.</td>
    <td>${geometryName}</td>
    <td>${geometryResult}cm<sup>2</sup></td>
    <td><button class="btn btn-sm btn-primary">Convert to m<sup>2</sup></button></td>
    
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

// random color funntion
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

// card body
const allcardBody = document.getElementsByClassName('card-random-color');
for(const cardBody of allcardBody){
    cardBody.addEventListener('mouseover', function(event){
        cardBody.style.backgroundColor = randomColor();
    })
}


// Triangle Button Add Event Listener
document.getElementById('triangle-btn').addEventListener('click', function () {
    serial += 1;
    const triangleName = document.getElementById('triangle-name').innerText;
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height')

    const triangleArea = (0.5 * triangleBase * triangleHeight).toFixed(2);

    showData(triangleName, triangleArea);
})


// Rectangle Button Add Event Listener
document.getElementById('rectangle-btn').addEventListener('click', function () {
    serial += 1;
    const rectangleName = document.getElementById('rectangle-name').innerText;
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    const rectangleArea = (rectangleWidth * rectangleLength).toFixed(2);

    showData(rectangleName, rectangleArea);
})


// Parallelogram Button Add Event Listener
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    serial += 1;
    const parallelogramName = document.getElementById('parallelogram-name').innerText;
    const parallelogramBase = getElementValueById('parallelogram-base');
    const parallelogramHeight = getElementValueById('parallelogram-height');

    const parallelogramArea = (parallelogramBase * parallelogramHeight).toFixed(2);

    showData(parallelogramName, parallelogramArea);
})


// Rhombus Button Add Event Listener
document.getElementById('rhombus-btn').addEventListener('click', function () {
    serial += 1;
    const rhombusName = document.getElementById('rhombus-name').innerText;
    const rhombusArea = (0.5 * 16 * 8).toFixed(2);

    showData(rhombusName, rhombusArea)
})


// Pentagon Button Add Event Listener
document.getElementById('pentagon-btn').addEventListener('click', function () {
    serial += 1;
    const pentagonName = document.getElementById('pentagon-name').innerText;
    const pentagonPerimeter = getInputValueById('pentagon-perimeter');
    const pentagonApothem = getInputValueById('pentagon-apothem');

    const pentagonArea = (0.5 * pentagonPerimeter * pentagonApothem).toFixed(2);

    showData(pentagonName, pentagonArea);
})


// Ellipse Button Add Event Listener
document.getElementById('ellipse-btn').addEventListener('click', function () {
    serial += 1;
    const ellipseName = document.getElementById('ellipse-name').innerText;
    const ellipseInput1 = getInputValueById('ellipse-input-1');
    const ellipseInput2 = getInputValueById('ellipse-input-2');

    const ellipseArea = (3.14 * ellipseInput1 * ellipseInput2).toFixed(2);

    showData(ellipseName, ellipseArea);
})