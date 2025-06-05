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

    const operants = ['+', '-', '/', 'x']

    labels.forEach(element => {
        let button = document.createElement('button');
        button.textContent = element;
        button.classList.add('button');
        button.addEventListener('click', e => {
            const textContext = e.target.textContent;
            if (!isNaN(parseInt(textContext))) {
                addNumberToDisplay(textContext);
            }
            else if (operants.includes(textContext)) {
                currentOperation.a = display.textContent;
                currentOperation.operant = textContext;
                display.textContent = ''
            }
            else if (textContext === '=') {
                currentOperation.b = display.textContent;
                if (isValidOperation) {
                    const ans = operate(currentOperation);
                    display.textContent = ans;
                    setupNewOperation(ans);
                }
                else {
                    display.textContent = 'Invalid Operation.. Please Clear'
                }
                
            }
            else if (textContext === 'C' || textContext === "CE") {
                display.textContent = ''
                clearCurrentOperation();
            }
        })

        parent.appendChild(button);
    });
}

function addNumberToDisplay(number) {
    display.textContent +=  number;
}

function isValidOperation() {
    for (let key in currentOperation) {
        if (currentOperation[key] === '') return false;
    }

    return true;
}

function clearCurrentOperation() {
    for (let key in currentOperation) {
        currentOperation[key] = '';
    }
}

function setupNewOperation(value) {
    clearCurrentOperation()
    currentOperation.a = value;
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
        case 'x':
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
