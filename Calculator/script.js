let currentInput = "";

function appendCharacter(character) {
    currentInput += character;
    document.getElementById("result").value = currentInput;
}

function clearResult() {
    currentInput = "";
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById("result").value = currentInput;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}