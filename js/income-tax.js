document.addEventListener('DOMContentLoaded', function() {
    const incomeInput = document.getElementById('income');
    const taxOutput = document.getElementById('tax');
    const calculateButton = document.getElementById('calculateButton');
    const clearButton = document.getElementById('clearButton');
  
    calculateButton.addEventListener('click', processEntry);
    clearButton.addEventListener('click', clearFields);
  
    function processEntry() {
      const income = parseFloat(incomeInput.value);
  
      if (isNaN(income) || income <= 0) {
        alert('Please enter a valid positive income amount.');
        return;
      }
  
      const tax = calculateTax(income);
      taxOutput.value = tax.toFixed(2);
      incomeInput.focus();
    }
  
    function calculateTax(income) {
      let tax = 0;
      const taxRates = [
        { rate: 0.1, max: 9875 },
        { rate: 0.12, max: 40125, constant: 987.5 },
        // Add the remaining tax brackets here
      ];
  
      for (const bracket of taxRates) {
        if (income <= bracket.max) {
          tax = (income - (bracket.max - bracket.constant)) * bracket.rate;
          break;
        } else {
          tax += bracket.constant;
          income -= bracket.max;
        }
      }
  
      return tax;
    }
  
    function clearFields() {
      incomeInput.value = '';
      taxOutput.value = '';
      incomeInput.focus();
    }
  });