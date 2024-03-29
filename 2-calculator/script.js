document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display'); 
    const buttons = document.querySelectorAll('button');
    const clearButton = document.getElementById('clearButton');

    buttons.forEach(button => {
        button.addEventListener('click', function() { 

            const value = button.textContent;

            if (value === 'Clear') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});

function clearDisplay() {
    currentInput = '';
    display.value = ''; 
}

function calculate() {
    try {
       
        const result = eval(BigInt(currentInput));
        display.value = result.toString();
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
