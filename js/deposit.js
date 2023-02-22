document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the deposit amount form the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //deposit the current amount total
    // for non-input use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    // clear the deposit field
    depositField.value = '';
})