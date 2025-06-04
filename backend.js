let buttonDiv = document.querySelector('#buttons');
let display = document.querySelector('#display>p');

function addButtons(parent) {
    const labels = 
    [   '%', 'CE', 'C', 'DEL',
        '7', '8', '9', 'x',
        '4', '5', '6', '/',
        '1', '2', '3', '-',
        '.', '0', '=', '+'
    ]

    labels.forEach(element => {
        let button = document.createElement('button');
        button.textContent = element;
        button.classList.add('button');
        button.addEventListener('click', e => {
            display.textContent += e.target.textContent;
        })

        parent.appendChild(button);
    });
}

function operate(operation) {
    a = parseFloat(operation.a);
    b = parseFloat(operation.b);

    if (isNaN(a) || isNaN(b)) {
        console.log("Invalid number in operation...");
        return 'Error';
    }

    switch (operation.operant) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

addButtons(buttonDiv);


let currentOperation = {a: '', b: '', operant: ''}