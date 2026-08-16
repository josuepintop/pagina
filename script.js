let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

let displayDivision = document.getElementById('displayDivision');
let currentInputDiv = '';
let previousInputDiv = '';

// ======== CALCULADORA PRINCIPAL ========

// Agregar un número o punto al display
function appendNumber(num) {
    // Evitar múltiples puntos
    if (num === '.' && currentInput.includes('.')) {
        return;
    }
    
    currentInput += num;
    updateDisplay();
}

// Agregar un operador
function appendOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Calcular el resultado
function calculate() {
    if (previousInput === '' || currentInput === '' || operator === null) {
        return;
    }
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('No se puede dividir entre 0');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Limpiar el display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Eliminar el último carácter
function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
}

// Actualizar el display
function updateDisplay() {
    display.value = currentInput || '0';
}

// ======== CALCULADORA DE DIVISIONES ========

// Agregar un número a la calculadora de divisiones
function appendNumberDivision(num) {
    // Evitar múltiples puntos
    if (num === '.' && currentInputDiv.includes('.')) {
        return;
    }
    
    currentInputDiv += num;
    updateDisplayDivision();
}

// Agregar operador división
function appendOperatorDivision(op) {
    if (currentInputDiv === '') return;
    
    if (previousInputDiv !== '') {
        calculateDivision();
    }
    
    previousInputDiv = currentInputDiv;
    currentInputDiv = '';
}

// Calcular división
function calculateDivision() {
    if (previousInputDiv === '' || currentInputDiv === '') {
        return;
    }
    
    const prev = parseFloat(previousInputDiv);
    const current = parseFloat(currentInputDiv);
    
    if (current === 0) {
        alert('No se puede dividir entre 0');
        clearDisplayDivision();
        return;
    }
    
    let result = prev / current;
    currentInputDiv = result.toString();
    previousInputDiv = '';
    updateDisplayDivision();
}

// Limpiar la calculadora de divisiones
function clearDisplayDivision() {
    currentInputDiv = '';
    previousInputDiv = '';
    updateDisplayDivision();
}

// Eliminar el último carácter en divisiones
function deleteLastDivision() {
    currentInputDiv = currentInputDiv.toString().slice(0, -1);
    updateDisplayDivision();
}

// Actualizar display de divisiones
function updateDisplayDivision() {
    displayDivision.value = currentInputDiv || '0';
}

// ======== SOPORTE DE TECLADO ========

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+' || key === '-') {
        appendOperator(key);
    } else if (key === '*') {
        event.preventDefault();
        appendOperator('*');
    } else if (key === '/') {
        event.preventDefault();
        appendOperator('/');
    } else if (key === '%') {
        appendOperator('%');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

// Inicializar
updateDisplay();
updateDisplayDivision();
