document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the deposit amount form the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    //deposit the current amount total
    // for non-input use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.value;
})