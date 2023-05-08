////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Popup form submit for price
// Get the button element
const quickStartBtn = document.querySelector('#quick-start-btn');
// Get the popup element
const popup = document.querySelector('.popup');
// Get the close button element
const closeButton = document.querySelector('.close');

// Add event listener to the register role button
quickStartBtn.addEventListener('click', function() {
    popup.classList.add('show');
});

// Add event listener to the close button
closeButton.addEventListener('click', function() {
  popup.classList.remove('show');
});

// Get the submit button element
const submitButton = document.querySelector('#role-submit');
// Add event listener to the submit button
submitButton.addEventListener('click', function() {
    const username = document.querySelector('#username');
    const userRoleSelect = document.getElementById("userrole");
    const selectedUserRole = userRoleSelect.value;
    alert(`
    Username: ${username} 
    Role: ${selectedUserRole}`); 

    popup.classList.remove('show');
    //Note:
    //After can set the price in remix, try to reload to see the edit icon whether will change to the inputted price or not
});
