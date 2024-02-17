function validateNumber(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value === 0){
        alert('Please enter a valid number');
    }
  }
  function calculateTip() {
    // Get the entered amount
    const amountInput = document.getElementsByClassName('input1')[0]; // Assuming you have only one input with class 'input1'
    const amount = parseFloat(amountInput.value);

    // Get the button element
    const myButton = document.getElementsByTagName('button')[0]; // Assuming you have only one button

    // Get the text on the button using innerText
    const buttonTextInnerText = myButton.innerText;

    // Convert the buttonTextInnerText to a number for the calculation
    const tipPercentage = parseFloat(buttonTextInnerText);

    // Calculate the tip amount based on the button text (assumed percentage)
    const tipAmount = (tipPercentage * amount)/10;

    // Update the tipAmount input box with the calculated tip
    const tipAmountInput = document.getElementsByClassName('input2')[0]; // Assuming you have only one input with class 'input2'
    tipAmountInput.value = tipAmount.toFixed(2); // Display the tip amount with two decimal places
}
