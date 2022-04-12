//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    const inputField = document.getElementById('input')
    const currentValue = inputField.value
    inputField.value = currentValue + number
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    const inputField = document.getElementById('input')
    const currentValue = inputField.value
    if (operator == '/' || operator == '*' || operator == '-' || operator == '+' || operator == '.') {
        inputField.value = currentValue + operator
    }
    if (operator == 'AC') {
        inputField.value = ''
    }
    if (operator == 'Del') {
        inputField.value = currentValue.slice(0, currentValue.length - 1)
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    const inputField = document.getElementById('input')
    const currentValue = inputField.value
    inputField.value = eval(currentValue)
}