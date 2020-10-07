window.onload = () => {
    const output = document.getElementById('output');
    
    const buttons = [...document.getElementsByTagName('button')];
    buttons.forEach((button) => {
        button.onclick = () => {
            output.value += button.value;
        }
    });
    
    const equalsButton = document.getElementById('equals');
    equalsButton.onclick = () => {
        let expr = output.value;
        
        expr = expr.replace('sin', 'Math.sin');
        expr = expr.replace('cos', 'Math.cos');
        expr = expr.replace('tan', 'Math.tan');
        expr = expr.replace('sqrt', 'Math.sqrt');
        expr = expr.replace('log', 'Math.log');
        
        expr = expr.replace('^', ' ** ');
        
        output.value = eval(expr);
    }
    
    const clearButton = document.getElementById('clear');
    clearButton.onclick = () => {
        output.value = '';
    }
}
