const operationBtns: NodeListOf<HTMLDivElement> = document.querySelectorAll('.operators > div');

const resultBtn = document.querySelector('#result');
const clearBtn = document.querySelector('#clear');

const numberBtns: NodeListOf<HTMLDivElement> = document.querySelectorAll('.numbers > div:not(#clear)');

const display: HTMLDivElement = document.querySelector('#input');

let leftNumber: string = '',
    rightNumber: string = '',
    operation: string = '',
    result: string = '';

const calculate = (): void => {
    const _left = Number(leftNumber);
    const _right = Number(rightNumber);
    let _result: any;
    switch(operation){
        case '+':
            _result = _left + _right;
            break;
        case '-':
            _result = _left - _right;
            break;
        case '×':
            _result = _left * _right;
            break;
        case '÷':
            _result = _left / _right;
            break;
        default:
            return;
    }

    result = _result.toString();
};

const updateDisplay = (): void => {
    if (result !== '') {
        display.innerText = result;
    } else {
        display.innerText = leftNumber 
                + operation
                + rightNumber;
    }   
}

const clear = () => {
    leftNumber = '';
    rightNumber = '';
    operation = '';
    result = '';
}

const updateNumbers = (number: string): void => {
    if (number === '.' && rightNumber.indexOf('.') > -1){
        return;
    }

    rightNumber += number;
}

const updateOperation = (opr: string): void => {
    leftNumber = rightNumber;
    rightNumber = '';
    operation = opr;
}

numberBtns.forEach((btn: HTMLDivElement): void => {
    btn.addEventListener('click', () => {
        updateNumbers(btn.innerText);
        updateDisplay();
    })
})

operationBtns.forEach((btn: HTMLDivElement): void => {
    btn.addEventListener('click', () => {
        updateOperation(btn.innerText);
        updateDisplay();
    })
})

clearBtn.addEventListener('click', (): void => {
    clear();
    updateDisplay();
})

resultBtn.addEventListener('click', (): void => {
    calculate();
    updateDisplay();
})

