/* Kirtirajsinh Atodariya 
   n01620157 */

document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const quartersOutput = document.getElementById('quarters');
    const dimesOutput = document.getElementById('dimes');
    const nickelsOutput = document.getElementById('nickels');
    const penniesOutput = document.getElementById('pennies');
    const makeChangeButton = document.getElementById('makeChangeButton');
    const clearButton = document.getElementById('clearButton');
  
    makeChangeButton.addEventListener('click', processEntry);
    clearButton.addEventListener('click', clearFields);
  
    function processEntry() {
      const amount = parseFloat(amountInput.value);
  
      if (isNaN(amount) || amount < 0 || amount > 99 || !Number.isInteger(amount)) {
        alert('Please enter a valid amount between 0 and 99 cents.');
        return;
      }
  
      makeChange(amount);
    }
  
    function makeChange(amount) {
      const quarters = Math.floor(amount / 25);
      amount %= 25;
  
      const dimes = Math.floor(amount / 10);
      amount %= 10;
  
      const nickels = Math.floor(amount / 5);
      amount %= 5;
  
      const pennies = amount;
  
      quartersOutput.value = quarters;
      dimesOutput.value = dimes;
      nickelsOutput.value = nickels;
      penniesOutput.value = pennies;
    }
  
    function clearFields() {
      amountInput.value = '';
      quartersOutput.value = '';
      dimesOutput.value = '';
      nickelsOutput.value = '';
      penniesOutput.value = '';
      amountInput.focus();
    }
  });