let num1 = 0
let num2 = 0
let result = 0
let operator = ''
let displayValue = '0'
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
const updateDisplay = () => display.textContent = displayValue

function clickOperand(button) {
  displayValue === '0' ? displayValue = button.textContent : displayValue += button.textContent
  updateDisplay()
}

function clickOperator(button) {
  if (operator === '') {
    operator = button.textContent
    num1 = Number(displayValue)
  } else {
    operator = button.textContent
    num2 = Number(displayValue)
    operate(num1, num2, operator)
    num1 = result
  }
  displayValue = ''
}

function clickDot(button) {
  !displayValue.includes('.') ? displayValue += button.textContent : null
  updateDisplay()
}

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      result = add(num1, num2)
      displayValue = result.toString()
      updateDisplay()
      break;
    case '-':
      result = subtract(num1, num2)
      displayValue = result.toString()
      updateDisplay()
      break;
    case 'x':
      result = multiply(num1, num2)
      displayValue = result.toString()
      updateDisplay()
      break;
    case '÷':
      result = divide(num1, num2)
      displayValue = result.toString()
      updateDisplay()
      break;
    default:
      break;
  }
}

function deleteLastCharacter() {
  displayValue.length > 1
    ? displayValue = displayValue.slice(0, -1)
    : displayValue = '0'
  updateDisplay()
}

function clear() {
  num1 = 0
  num2 = 0
  result = 0
  operator = ''
  displayValue = '0'
  updateDisplay()
}

const display = document.querySelector('#display')
const clearBtn = document.querySelector('#clear').addEventListener('click', clear)
const deleteBtn = document.querySelector('#delete').addEventListener('click', deleteLastCharacter)
const percentageBtn = document.querySelector('#percentage')
const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', () => clickOperator(addBtn))
const subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', () => clickOperator(subtractBtn))
const multiplyBtn = document.querySelector('#multiply')
multiplyBtn.addEventListener('click', () => clickOperator(multiplyBtn))
const divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', () => clickOperator(divideBtn))

const dotBtn = document.querySelector('#dot')
dotBtn.addEventListener('click', () => clickDot(dotBtn))

const one = document.querySelector('#one')
one.addEventListener('click', () => clickOperand(one))
const two = document.querySelector('#two')
two.addEventListener('click', () => clickOperand(two))
const three = document.querySelector('#three')
three.addEventListener('click', () => clickOperand(three))
const four = document.querySelector('#four')
four.addEventListener('click', () => clickOperand(four))
const five = document.querySelector('#five')
five.addEventListener('click', () => clickOperand(five))
const six = document.querySelector('#six')
six.addEventListener('click', () => clickOperand(six))
const seven = document.querySelector('#seven')
seven.addEventListener('click', () => clickOperand(seven))
const eight = document.querySelector('#eight')
eight.addEventListener('click', () => clickOperand(eight))
const nine = document.querySelector('#nine')
nine.addEventListener('click', () => clickOperand(nine))
const zero = document.querySelector('#zero')
zero.addEventListener('click', () => clickOperand(zero))
const equalBtn = document.querySelector('#equal').addEventListener('click', () => {
  num2 = Number(displayValue)
  operate(num1, num2, operator)
})