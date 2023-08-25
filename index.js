let num1 = '0'
let num2 = '0'
let operator = ''
let displayValue = 0

const display = document.querySelector('#display')
const clearBtn = document.querySelector('#clear').addEventListener('click', clear)
const deleteBtn = document.querySelector('#delete')
const percentageBtn = document.querySelector('#percentage')
const addBtn = document.querySelector('#add').addEventListener('click', () => {
  // num1 = Number(display.textContent)
  // display.textContent = '0'
  operator = '+'
  console.log(num1, num2, operator)
  operate(num1, num2, operator)
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
  operator === '' ? num1 += 1 : num2 += 1
  displayValue = 1
  populateDisplay('1')
})
const two = document.querySelector('#two').addEventListener('click', () => {
  operator === '' ? num1 += 2 : num2 += 2
  displayValue = 2
  populateDisplay('2')
})
const three = document.querySelector('#three').addEventListener('click', () => {
  operator === '' ? num1 += 3 : num2 += 3
  displayValue = 3
  populateDisplay('3')
})
const four = document.querySelector('#four').addEventListener('click', () => {
  operator === '' ? num1 += 4 : num2 += 4
  displayValue = 4
  populateDisplay('4')
})
const five = document.querySelector('#five').addEventListener('click', () => {
  operator === '' ? num1 += 5 : num2 += 5
  displayValue = 5
  populateDisplay('5')
})
const six = document.querySelector('#six').addEventListener('click', () => {
  operator === '' ? num1 += 6 : num2 += 6
  displayValue = 6
  populateDisplay('6')
})
const seven = document.querySelector('#seven').addEventListener('click', () => {
  operator === '' ? num1 += 7 : num2 += 7
  displayValue = 7
  populateDisplay('7')
})
const eight = document.querySelector('#eight').addEventListener('click', () => {
  operator === '' ? num1 += 8 : num2 += 8
  displayValue = 8
  populateDisplay('8')
})
const nine = document.querySelector('#nine').addEventListener('click', () => {
  operator === '' ? num1 += 9 : num2 += 9
  displayValue = 9
  populateDisplay('9')
})
const zero = document.querySelector('#zero').addEventListener('click', () => {
  operator === '' ? num1 += 0 : num2 += 0
  displayValue = 0
  populateDisplay('0')
})

function add(num1, num2) {
  return Number(num1) + Number(num2)
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
      // clear()
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
    : display.textContent = displayValue
}

function clear() {
  num1 = 0
  num2 = 0
  display.textContent = '0'
}

console.log(num1, num2, operator)