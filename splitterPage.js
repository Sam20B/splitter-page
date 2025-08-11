function validateNumber(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value === 0){
        alert('Please enter a valid number');
    }
}

function validateNumber1(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value === 0){
        alert('Please enter a valid number');
    }
}

function calculateTip() {
    // Get the entered amount
    const amountInput = document.getElementsByClassName('input1')[0];
    const amount = parseFloat(amountInput.value);

    // Get all button elements
    const myButtons = document.querySelectorAll('button:not(#b6)');

    // Iterate over the buttons to find the clicked button
    let clickedButton;
    for (const button of myButtons) {
        button.addEventListener('click', function() {
            // Store the clicked button
            clickedButton = button;

            // Get the text on the clicked button using innerText
            const buttonTextInnerText = clickedButton.innerText;

            // Calculate the tip amount based on the button text (assumed percentage)
            const tipAmount = (parseFloat(buttonTextInnerText) * amount) / 100;

            // Update the tipAmount input box with the calculated tip
            const tipAmountInput = document.getElementsByClassName('input2')[0];

            // Check if the tipAmountInput element exists
            if (tipAmountInput) {
                tipAmountInput.value = tipAmount.toFixed(2); // Display the tip amount with two decimal places
            } else {
                alert('Error: Unable to find the tip input element.');
            }
        });
    }
}

function cantBeZero() {
    const numberOfPeople = document.querySelector(".input3"); // Use querySelector to get the first element with class 'input3'
    const cantBeZeroElement = document.querySelector(".c1p4"); // Use querySelector to get the first element with class 'c1p4'
    const numberOfPeopleValue = parseFloat(numberOfPeople.value);

    if (numberOfPeopleValue === 0) {
        // If numberOfPeopleValue is 0, show the text
        cantBeZeroElement.style.display = 'block';
    } else {
        // If numberOfPeopleValue is not 0, hide the text
        cantBeZeroElement.style.display = 'none';
    }
}

function input3() {
    const numberOfPeople = document.querySelector(".input3"); // Use querySelector to get the first element with class 'input3'
    const numberOfPeopleValue = parseFloat(numberOfPeople.value);

    if (numberOfPeopleValue === 0) {
        // If numberOfPeopleValue is 0, change border color to red
        numberOfPeople.style.borderColor = '#e06767';
    } else {
        // If numberOfPeopleValue is not 0, maintain the green color
        numberOfPeople.style.borderColor = '#5fc7a4';
    }
}

function multiplyValues() {
    // Get the values from the input boxes
    const input1 = document.getElementsByClassName('input2')[0].value;
    const input1Value = parseFloat(input1);
    const input2 = document.getElementsByClassName('input3')[0].value;
    const input2Value = parseFloat(input2);

    // Check if the inputs are valid numbers
    /*if (isNaN(input1Value) || isNaN(input2Value)) {
        alert('Please enter valid numbers in both input fields.');
        return;
    }*/

    // Multiply the values
    const result = input1Value * input2Value;

    // Display the result
    const input4 = document.getElementsByClassName('c2p7')[0];

    // Check if the input4 element exists
    if (input4) {
        input4.value = result.toFixed(2); // Display the input4 with two decimal places
    } else {
        alert('Result input element not found.');
    }
}

function multiplyValues2() {
    // Get the values from the input boxes
    const input1 = document.getElementsByClassName('input2')[0].value;
    const input1Value = parseFloat(input1);
    const input2 = document.getElementsByClassName('input3')[0].value;
    const input2Value = parseFloat(input2);

    // Check if the inputs are valid numbers
    /*if (isNaN(input1Value) || isNaN(input2Value)) {
        alert('Please enter valid numbers in both input fields.');
        return;
    }*/

    // Multiply the values
    const result = input1Value * input2Value;

    // Display the result
    const input4 = document.getElementsByClassName('c2p7')[0];

    // Check if the input4 element exists
    if (input4) {
        input4.value = result.toFixed(2); // Display the input4 with two decimal places
    } else {
        alert('Result input element not found.');
    }
    // Get the values from the input boxes
    const billInput = document.getElementsByClassName('input1')[0].value;
    const billInputValue = parseFloat(billInput);
    const peopleNumber = document.getElementsByClassName('input3')[0].value;
    const peopleNumberValue = parseFloat(peopleNumber);

    // Check if the inputs are valid numbers
    if (isNaN(billInputValue) || isNaN(peopleNumberValue)) {
        alert('Please enter valid number of people.');
        return;
    }

    // Multiply the values ... add the whole bill instead of multiplying the bill by the number of people again
    const answer = billInputValue * peopleNumberValue;
    const total = input2Value + answer;

    // Display the result
    const input5 = document.getElementsByClassName('c2p8')[0];

    // Check if the input4 element exists
    if (input5) {
        input5.value = total.toFixed(2); // Display the input4 with two decimal places
    } else {
        alert('Result input element not found.');
    }
}

function notMoreThan(){
    //get the value that is in the number of people input box
    const input3 = document.getElementsByClassName('input3')[0];
    const input3value = parseFloat(input3.value)

    if (input3value > 99) {
        alert('Number of people cannot exceed 99');
    }
}

function reset1() {
    const clear1 = document.getElementsByClassName("input1")[0]; //clear the content in input1
    clear1.value = '';
    const clear2 = document.getElementsByClassName("input2")[0]; //clear the content in input2
    clear2.value = '';
    const clear3 = document.getElementsByClassName("input3")[0]; //clear the content in input3
    clear3.value = '';
}

function reset2() {
    const change1 = document.getElementsByClassName("c2p7")[0]; //set the value of the tip to 0.00
    change1.value = '0.00';
    const change2 = document.getElementsByClassName("c2p8")[0]; //set the value of the total to 0.00
    change2.value = '0.00';
}