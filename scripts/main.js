/*window,onload = () => {

class Calculator {
    constructor(currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement
    }    

 appendNumber(number) {
     this.currentOperand = number
 }

 upadateDisplay() {
     this.currentOperandTextElement.innerText = this.currentOperand
 }
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

}
