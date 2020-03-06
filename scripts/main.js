window.onload = () => {
    const output = document.getElementById('output');
    
    const buttons = [...document.getElementsByTagName('button')];
    buttons.forEach((button) => {
        button.style.height = `${button.clientWidth}px`;
        button.onclick = () => {
            output.innerText += button.value;
        }
    });
    
    const equalsButton = document.getElementById('equals');
    equalsButton.onclick = () => {
        let expr = output.innerText;
        expr = expr.replace('sin', 'Math.sin');
        expr = expr.replace('cos', 'Math.cos');
        expr = expr.replace('tan', 'Math.tan');
        expr = expr.replace('sqrt', 'Math.sqrt');
        console.log(expr)
        const result = eval(expr);
        output.innerText = result;
    }
    
    const clearButton = document.getElementById('clear');
    clearButton.onclick = () => {
        output.innerText = '';
    }
    
    const backspaceButton = document.getElementById('backspace');
    backspaceButton.onclick = () => {
        let terms = output.innerText.split('');
        terms.pop();
        output.innerText = terms.join('');
    }
}


window.onresize = () => {
    const buttons = [...document.getElementsByTagName('button')];
    buttons.forEach((button) => {
        button.style.height = `${button.clientWidth}px`;
    });
}    
