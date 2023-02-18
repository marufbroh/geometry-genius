// Show Serial
let serial = 1;

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
    tableToday.appendChild(tr);
}

// Get Input Value Function
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
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
};

// card body
const allcardBody = document.getElementsByClassName('card-random-color');
for (const cardBody of allcardBody) {
    cardBody.addEventListener('mouseover', function () {
        cardBody.style.backgroundColor = randomColor();
    })
};


// Triangle Button Add Event Listener
document.getElementById('triangle-btn').addEventListener('click', function () {
    
    const triangleName = document.getElementById('triangle-name').innerText;
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');

    if (isNaN(triangleBase) || typeof (triangleBase) !== 'number' || triangleBase <= 0) {
        return alert('please provide valid numbers')
    }
    else if (isNaN(triangleHeight) || typeof (triangleHeight) !== 'number' || triangleHeight <= 0) {
        return alert('please provide valid numbers')
    }

    const triangleArea = (0.5 * triangleBase * triangleHeight).toFixed(2);

    showData(triangleName, triangleArea);

    serial += 1;
})


// Rectangle Button Add Event Listener
document.getElementById('rectangle-btn').addEventListener('click', function () {
    
    const rectangleName = document.getElementById('rectangle-name').innerText;
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    if (isNaN(rectangleWidth) || typeof (rectangleWidth) !== 'number' || rectangleWidth <= 0) {
        return alert('please provide valid numbers')
    }
    else if (isNaN(rectangleLength) || typeof (rectangleLength) !== 'number' || rectangleLength <= 0) {
        return alert('please provide valid numbers')
    }

    const rectangleArea = (rectangleWidth * rectangleLength).toFixed(2);

    showData(rectangleName, rectangleArea);

    serial += 1;
})


// Parallelogram Button Add Event Listener
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    
    const parallelogramName = document.getElementById('parallelogram-name').innerText;
    const parallelogramBase = getElementValueById('parallelogram-base');
    const parallelogramHeight = getElementValueById('parallelogram-height');

    const parallelogramArea = (parallelogramBase * parallelogramHeight).toFixed(2);

    showData(parallelogramName, parallelogramArea);

    serial += 1;
})


// Rhombus Button Add Event Listener
document.getElementById('rhombus-btn').addEventListener('click', function () {
    
    const rhombusName = document.getElementById('rhombus-name').innerText;
    const rhombusArea = (0.5 * 16 * 8).toFixed(2);

    showData(rhombusName, rhombusArea);

    serial += 1;
})


// Pentagon Button Add Event Listener
document.getElementById('pentagon-btn').addEventListener('click', function () {
    
    const pentagonName = document.getElementById('pentagon-name').innerText;
    const pentagonPerimeter = getInputValueById('pentagon-perimeter');
    const pentagonApothem = getInputValueById('pentagon-apothem');

    if (isNaN(pentagonPerimeter) || typeof (pentagonPerimeter) !== 'number' || pentagonPerimeter <= 0) {
        return alert('please provide valid numbers')
    }
    else if (isNaN(pentagonApothem) || typeof (pentagonApothem) !== 'number' || pentagonApothem <= 0) {
        return alert('please provide valid numbers')
    }

    const pentagonArea = (0.5 * pentagonPerimeter * pentagonApothem).toFixed(2);

    showData(pentagonName, pentagonArea);

    serial += 1;
})


// Ellipse Button Add Event Listener
document.getElementById('ellipse-btn').addEventListener('click', function () {
    
    const ellipseName = document.getElementById('ellipse-name').innerText;
    const ellipseInput1 = getInputValueById('ellipse-input-1');
    const ellipseInput2 = getInputValueById('ellipse-input-2');

    if (isNaN(ellipseInput1) || typeof (ellipseInput1) !== 'number' || ellipseInput1 <= 0) {
        return alert('please provide valid numbers')
    }
    else if (isNaN(ellipseInput2) || typeof (ellipseInput2) !== 'number' || ellipseInput2 <= 0) {
        return alert('please provide valid numbers')
    }

    const ellipseArea = (3.14 * ellipseInput1 * ellipseInput2).toFixed(2);

    showData(ellipseName, ellipseArea);

    serial += 1;
})