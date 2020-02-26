class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currnetOperandTextElement
        this.clear()
}    

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
 
delete() {
 
}
appendNumber(number) {
    this.currentOperand = number
}

chooseOperation(operation) {
 
}
 
compute() {
 
}
 
updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
}
 
const numberButtons = document.querySelectorall('[data-number]')
const operationButtons - document.querySelectorall('[data-operation'])
const equalsButton
const previousOperandTextElement = document.querySelector('
[data-previous-operand]')
  
const currentOperandTextElement = document.querySelector('
[data-current-operand]')

const calculater = new Calculater(previousOperandTextElement,currentOperandTextElement)

numberButtons.foreEach(button => {
    button.addEventListener('click', () => {
        calculater.appendnumber(button.innertext)
        calculater.upadateDisplay()
    })
})                                                                 
      console.log(button.clientWidth);
      console.log(button.clientHeight);
      button addEventListener('click', () => {
        caculator.appendNumber(button.innerText)
        caculator.updateDislplay()
      button.style.height = `${ button.clientWidth }px`;

    });



