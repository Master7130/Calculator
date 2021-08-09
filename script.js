var numButtons = document.querySelectorAll('[data-number]');
var operatorButtons = document.querySelectorAll('[data-operator]');
var clearButton = document.querySelector('[data-clear]');
var equalsButton = document.querySelector('[data-equals]');

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('output').innerHTML += button.innerHTML;
  })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('output').innerHTML += button.innerHTML;
    })
});

clearButton.addEventListener('click', () => {
    document.getElementById('output').innerHTML = ''
});

equalsButton.addEventListener('click', () => {
    let ans = eval(document.getElementById('output').innerHTML)
    document.getElementById('output').innerHTML = ans
});