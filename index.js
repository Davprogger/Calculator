let leftDisplay = '';
let rightDisplay = '';
let operand1 = '0';
let operand2 = '';
let operator = '';
let result = '';

function addDigit(digit) {
  if (operator === '') {
    if (operand1 === '0') {
      operand1 = digit;
      leftDisplay = operand1;
    } else {
      operand1 += digit;
      leftDisplay += digit;
    }
  } else {
    operand2 += digit;
    rightDisplay += digit;
  }
  updateDisplay();
}


function operation(op) {
  if (operator !== ' ') {
    calculate();
  }

  operator = op;
  leftDisplay = operand1;
  rightDisplay = ' ' + operator + ' ';
  updateDisplay();
}


function clearDisplay() {
  operand1 = '0';
  operand2 = '';
  operator = '';
  result = '';
  leftDisplay = '';
  rightDisplay = '';
  updateDisplay();
}

function calculate() {
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);
  let tempResult = 0;

  if (isNaN(num2)) {
    return;
  }
 
  
  switch (operator) {
    case '+':
      tempResult = num1 + num2;
      break;
    case '-':
      tempResult = num1 - num2;
      break;
    case '*':
      tempResult = num1 * num2;
      break;
    case '/':
      tempResult = num1 / num2;
      break;
  }

  operand1 = tempResult.toString();
  operand2 = '';
  operator = '';
  leftDisplay = operand1;
  rightDisplay = '';
  updateDisplay();
}

function updateDisplay() {
  let displayValue = (leftDisplay || '0') + '' + rightDisplay;
  document.getElementById('display').value = displayValue;
}

setInterval(updateDisplay, 100);
