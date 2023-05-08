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
submitButton.addEventListener('click', function(event) {
    event.preventDefault()

    const username = document.querySelector('#username').value;
    const selectedUserRole = document.getElementById("userrole").value;

    if(username === null || username === '' || selectedUserRole === null || selectedUserRole === '') {
        alert(`Please provide your username and role to proceed...`); 
    } else {
        alert(`
        Username: ${username} 
        Role: ${selectedUserRole}`); 

        // Switch based on the selected role and redirect to the appropriate page
        switch (selectedUserRole) {
          case "FARMER":
            window.location.href = "farmer.html";
            break;
          case "DISTRIBUTOR":
            window.location.href = "distributor.html";
            break;
          case "RETAILER":
            window.location.href = "retailer.html";
            break;
          case "CUSTOMER":
            window.location.href = "consumer.html";
            break;
          default:
            alert("Please select a valid role.");
            break;
        }
    }

    popup.classList.remove('show');
});
