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
   this.currentOperand = this.currentOperamd.tostring().slice(0, -1)
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

 eval(expression){

 }
 
 updateDisplay(){
     this.currentOperandTextElement.innerText = this.currentOperand  
     this.previousOperandTextElement.innertext = this.previousOperand 
 }
}
    
const numberButtons =document.querySelectorAll('[data-number}')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const alg1Button = document.querySelector('[data-alg1-operatrions]')
const geomButton = document.querySelector('[data-geom-operations]')
const squaringButton = document.querySelector('[data-squaring]')
const squarerootButton = document.querySelector('[data-square-root]')
const exponetButton = document.querySelector('[data-exponets]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')  
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.foreEach(button => {
    button.addEventListener('click', () => {
        calculator.appendnumber(button.innertext)
        calculator.upadateDisplay()
    })
}) 

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innertext)
        calculator.upadateDisplay()
    })
})                           

equalsbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.compute()
        calculator.upadateDisplay()
    })
})                           

allClearbutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.clear()
        calculator.upadateDisplay()
    })
})

deletebutton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.delete()
        calculator.upadateDisplay()
    })
})  
      console.log(button.clientWidth);
      console.log(button.clientHeight);
      button.style.height = `${ button.clientWidth }px`;
