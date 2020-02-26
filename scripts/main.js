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
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currnetOperand.tostring() + number.tostring()
}

chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation 
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
 
}
 
compute() {
 
}
 
updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innertext = this.previousOperand
}
 
    
const numberButtons =document.querySelectorAll('[data-number'])
const operationButtons = document.querySelectorAll('[data-operation'])
const equalsButton = document.querySelector('[data-equals'])
const deleteButton = document.querySelector('[data-delete'])
const allClearButton = document.querySelector('[data-all-clear'])
const alg1Button = document.querySelector('[data-alg1-operatrions'])
const geomButton = document.querySelector('[data-geom-operations'])
const squaringButton = document.querySelector('[data-squaring'])
const squarerootButton = document.querySelector('[data-square-root'])
const exponetButton = document.querySelector('[data-exponets'])
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

operationButtons.foreEach(button => {
    button.addEventListener('click', () => {
        calculater.chooseOperarion(button.innertext)
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



