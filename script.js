// Refrence display element
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);
    
    alert('You pressed: ' + value);
}

function clearDisplay() {
    console.log('Clear button pressed.');

    alert('Clear button was clicked');
}

function deleteLast() {
    console.log('Backspace button pressed.');

    alert('Backspace button was clicked');
}

function calculate() {
    console.log('Equals button pressed.');

    alert('Equals button was clicked');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded successfully');
    console.log('Display elemt', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
})