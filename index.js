let num1 = 0
let num2 = 0
let operator = ''
let displayValue = 0

const display = document.querySelector('#display')
const clearBtn = document.querySelector('#clear').addEventListener('click', clear)
const deleteBtn = document.querySelector('#delete')
const percentageBtn = document.querySelector('#percentage')
const addBtn = document.querySelector('#add').addEventListener('click', () => {
  num1 = Number(display.textContent)
  display.textContent = '0'
  operator = '+'
})
const subtractBtn = document.querySelector('#subtract').addEventListener('click', () => {
  num1 = Number(display.textContent)
  display.textContent = '0'
  operator = '-'
})
const multiplyBtn = document.querySelector('#multiply').addEventListener('click', () => {
  num1 = Number(display.textContent)
  display.textContent = '0'
  operator = 'x'
})
const divideBtn = document.querySelector('#divide').addEventListener('click', () => {
  num1 = Number(display.textContent)
  display.textContent = '0'
  operator = '÷'
})
const equalBtn = document.querySelector('#equal').addEventListener('click', () => {
  num2 = Number(display.textContent)
  operate(num1, num2, operator)
})
const dotBtn = document.querySelector('#dot').addEventListener('click', () => {
  populateDisplay('.')
})
const one = document.querySelector('#one').addEventListener('click', () => {
  populateDisplay('1')
})
const two = document.querySelector('#two').addEventListener('click', () => {
  populateDisplay('2')
})
const three = document.querySelector('#three').addEventListener('click', () => {
  populateDisplay('3')
})
const four = document.querySelector('#four').addEventListener('click', () => {
  populateDisplay('4')
})
const five = document.querySelector('#five').addEventListener('click', () => {
  populateDisplay('5')
})
const six = document.querySelector('#six').addEventListener('click', () => {
  populateDisplay('6')
})
const seven = document.querySelector('#seven').addEventListener('click', () => {
  populateDisplay('7')
})
const eight = document.querySelector('#eight').addEventListener('click', () => {
  populateDisplay('8')
})
const nine = document.querySelector('#nine').addEventListener('click', () => {
  populateDisplay('9')
})
const zero = document.querySelector('#zero').addEventListener('click', () => {
  populateDisplay('0')
})

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      displayValue = add(num1, num2)
      clear()
      populateDisplay(displayValue)
      break;
    case '-':
      displayValue = subtract(num1, num2)
      clear()
      populateDisplay(displayValue)
      break;
    case 'x':
      displayValue = multiply(num1, num2)
      clear()
      populateDisplay(displayValue)
      break;
    case '÷':
      displayValue = divide(num1, num2)
      clear()
      populateDisplay(displayValue)
      break;
    default:
      break;
  }
}

function populateDisplay(number) {
  display.textContent === '0'
    ? display.textContent = number
    : display.textContent += number
}

function clear() {
  num1 = 0
  num2 = 0
  display.textContent = '0'
}