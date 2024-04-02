document.addEventListener('DOMContentLoaded', function() {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number format
    const reservationForm = document.getElementById('reservationForm');
  
    reservationForm.addEventListener('submit', function(event) {
      const arrivalDate = document.getElementById('arrivalDate').value.trim();
      const nights = document.getElementById('nights').value.trim();
      const adults = document.getElementById('adults').value;
      const children = document.getElementById('children').value;
      const roomType = document.querySelector('input[name="roomType"]:checked');
      const bedType = document.querySelector('input[name="bedType"]:checked');
      const smoking = document.getElementById('smoking').checked;
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
  
      let isValid = true;
  
      if (!arrivalDate) {
        alert('Please enter your arrival date.');
        isValid = false;
      }
  
      if (!nights || isNaN(nights) || parseInt(nights) <= 0) {
        alert('Please enter a valid number of nights.');
        isValid = false;
      }
  
      if (!adults || adults === '') {
        alert('Please select the number of adults.');
        isValid = false;
      }
  
      if (!children || children === '') {
        alert('Please select the number of children.');
        isValid = false;
      }
  
      if (!roomType) {
        alert('Please select a room type.');
        isValid = false;
      }
  
      if (!bedType) {
        alert('Please select a bed type.');
        isValid = false;
      }
  
      if (!name) {
        alert('Please enter your name.');
        isValid = false;
      }
  
      if (!email || !emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
  
      if (!phone || !phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  });

/*date*/
const arrivalDateInput = document.getElementById('arrivalDate');


const today = new Date();

function showDatePicker() {

  const selectedDate = new Date();


  const userSelection = window.prompt('Select arrival date', selectedDate.toISOString().split('T')[0]);

 
  if (userSelection !== null) {
    arrivalDateInput.value = userSelection;
  }
}


arrivalDateInput.addEventListener('click', showDatePicker);