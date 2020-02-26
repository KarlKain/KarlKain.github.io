
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
 
    
    const buttons = document.querySelectorAll('button');
    const currentOperandTextElement = document.querySelector('
    [data-current-operand]')

    buttons.forEach((button) => {

      console.log(button.clientWidth);
      console.log(button.clientHeight);
      button addEventListener('click', () => {
        caculator.appendNumber(button.innerText)
        caculator.updateDislplay()
      button.style.height = `${ button.clientWidth }px`;

    });



