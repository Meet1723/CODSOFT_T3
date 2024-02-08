let displayvalue = "0";

function updateDisplay(){
    document.getElementById('display').innerText = displayvalue;
}

function clearDisplay(){
    displayvalue = '0';
    updateDisplay();
}

function appendToDisplay(value){
    if(displayvalue === '0' && value != '.'){
        displayvalue = value;
    }else{
        displayvalue += value;
    }
    updateDisplay();
}

function calculateResult(){
    try{
        displayvalue = eval(displayvalue).tostring();
    } catch (error) {
        displayvalue = 'Error';
    }
    updateDisplay();
}

function deleteLastCharacter() {
    displayvalue = displayvalue.slice(0, -1);
    if(displayvalue === ''){
        displayvalue = '0';
    }
    updateDisplay();
}
updateDisplay();