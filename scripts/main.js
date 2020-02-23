/*window.onload = () => {

    const buttons = document.querySelectorAll('button');
    const currentOperandTextElement = document.querySelector('
    [data-current-operand]')

    buttons.forEach((button) => {

      console.log(button.clientWidth);
      console.log(button.clientHeight);

      button.style.height = `${ button.clientWidth }px`;

    });

}
