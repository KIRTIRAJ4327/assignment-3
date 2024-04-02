/* Kirtirajsinh Atodariya 
   n01620157 */

document.addEventListener('DOMContentLoaded', function() {
  const subtotalInput = document.getElementById('subtotal');
  const taxRateInput = document.getElementById('taxRate');
  const taxOutput = document.getElementById('tax');
  const totalOutput = document.getElementById('total');
  const calculateButton = document.getElementById('calculateButton');
  const clearButton = document.getElementById('clearButton');

  calculateButton.addEventListener('click', processEntries);
  clearButton.addEventListener('click', clearFields);

  function processEntries() {
    const subtotal = parseFloat(subtotalInput.value);
    const taxRate = parseFloat(taxRateInput.value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
      alert('Subtotal must be > 0 and < 10000');
      return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
      alert('Tax Rate must be > 0 and < 12');
      return;
    }

    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    taxOutput.value = tax.toFixed(2);
    totalOutput.value = total.toFixed(2);
  }

  function clearFields() {
    subtotalInput.value = '';
    taxRateInput.value = '';
    taxOutput.value = '';
    totalOutput.value = '';
    subtotalInput.focus();
  }
});