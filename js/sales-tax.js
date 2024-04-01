// function $(selector) {
//     return document.querySelector(selector);
//   }
//   function processEntries() {
//     const subtotal = parseFloat($('#subtotal').value);
//     const taxRate = parseFloat($('#taxRate').value);
  
//     // Validate inputs
//     if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
//       alert('Subtotal must be > 0 and < 10000');
//       return;
//     }
  
//     if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
//       alert('Tax Rate must be > 0 and < 12');
//       return;
//     }
  
//     const tax = subtotal * (taxRate / 100);
//     const total = subtotal + tax;
  
//     $('#tax').value = tax.toFixed(2);
//     $('#total').value = total.toFixed(2);
//   }
//   document.addEventListener('DOMContentLoaded', function() {
//     $('#calculateButton').addEventListener('click', processEntries);
//     $('#subtotal').focus();
//   });
//   function clearTextBox(id) {
//     $(id).value = '';
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     $('#clearButton').addEventListener('click', function() {
//       clearTextBox('#subtotal');
//       clearTextBox('#taxRate');
//       clearTextBox('#tax');
//       clearTextBox('#total');
//       $('#subtotal').focus();
//     });
  
//     $('#subtotal').addEventListener('click', function() {
//       clearTextBox('#subtotal');
//     });
  
//     $('#taxRate').addEventListener('click', function() {
//       clearTextBox('#taxRate');
//     });
//   });



//   /*Page 2 */

//   function processEntry() {
//     const amount = parseFloat($('#amount').value);
  
//     if (isNaN(amount) || amount < 0 || amount > 99 || !Number.isInteger(amount)) {
//       alert('Please enter a valid amount between 0 and 99 cents.');
//       return;
//     }
  
//     makeChange(amount);
//   }

//   function makeChange(amount) {
//     const quarters = Math.floor(amount / 25);
//     amount %= 25;
  
//     const dimes = Math.floor(amount / 10);
//     amount %= 10;
  
//     const nickels = Math.floor(amount / 5);
//     amount %= 5;
  
//     const pennies = amount;
  
//     $('#quarters').value = quarters;
//     $('#dimes').value = dimes;
//     $('#nickels').value = nickels;
//     $('#pennies').value = pennies;
//   }

//   document.addEventListener('DOMContentLoaded', function() {
//     $('#makeChangeButton').addEventListener('click', processEntry);
//   });


// /*Page 3 */

//   document.addEventListener('DOMContentLoaded', function() {
//     $('#calculateButton').addEventListener('click', processEntry);
//     $('#income').focus();
//   });

//   function processEntry() {
//     const income = parseFloat($('#income').value);
  
//     if (isNaN(income) || income <= 0) {
//       alert('Please enter a valid positive income amount.');
//       return;
//     }
  
//     const tax = calculateTax(income);
//     $('#tax').value = tax.toFixed(2);
//     $('#income').focus();
//   }

//   function calculateTax(income) {
//     let tax = 0;
//     const taxRates = [
//       { rate: 0.1, max: 9875 },
//       { rate: 0.12, max: 40125, constant: 987.5 },
//       { rate: 0.22, max: 85525, constant: 4617.5 },
//       { rate: 0.24, max: 163300, constant: 14605.5 },
//       { rate: 0.32, max: 207350, constant: 33271.5 },
//       { rate: 0.35, max: 518400, constant: 47367.5 },
//       { rate: 0.37, max: Infinity, constant: 156235 }
//     ];
  
//     for (const bracket of taxRates) {
//       if (income <= bracket.max) {
//         tax = (income - (bracket.max - bracket.constant)) * bracket.rate;
//         break;
//       } else {
//         tax += bracket.constant;
//         income -= bracket.max;
//       }
//     }
  
//     return tax;
//   }



// /*Page 4*/ 

//   document.addEventListener('DOMContentLoaded', function() {
//     $('#arrivalDate').focus();
//   });

//   const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  
  
//   $('#reservationForm').addEventListener('submit', function(event) {
//     const name = $('#name').value.trim();
//     const email = $('#email').value.trim();
//     const arrivalDate = $('#arrivalDate').value.trim();
//     const nights = $('#nights').value.trim();
  
//     let isValid = true;
  
//     if (!name) {
//       alert('Please enter your name.');
//       isValid = false;
//     }
  
//     if (!email || !emailPattern.test(email)) {
//       alert('Please enter a valid email address.');
//       isValid = false;
//     }
  
//     if (!arrivalDate) {
//       alert('Please enter your arrival date.');
//       isValid = false;
//     }
  
//     if (!nights || isNaN(nights) || parseInt(nights) <= 0) {
//       alert('Please enter a valid number of nights.');
//       isValid = false;
//     }
  
//     if (!isValid) {
//       event.preventDefault();
//     }
  
//     $('#name').value = name;
//     $('#email').value = email;
//     $('#arrivalDate').value = arrivalDate;
//     $('#nights').value = nights;
//   });


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