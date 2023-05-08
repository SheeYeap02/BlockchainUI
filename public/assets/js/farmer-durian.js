// Set Current Retailer Name 
const farmer_connect = document.querySelector('.farmer-connect');
const farmer_name = "Farmer: Farmer 1";
farmer_connect.textContent = farmer_name;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get the distributor input field 
const distributorField = document.getElementById('distributor');
const distributors = [
  { name: 'Distributor 1', role: 'DISTRIBUTOR' },
  { name: 'Distributor 2', role: 'DISTRIBUTOR' },
  { name: 'Distributor 3', role: 'DISTRIBUTOR' },
  { name: 'Distributor 4', role: 'DISTRIBUTOR' },
];

// Create the dropdown list of available distributors
// const distributorOptions = distributors.map(distributor => `<option value="${distributor.name}">${distributor.name}</option>`).join('');
const distributorOptions = [
  `<option value="default">Select a distributor...</option>`,
  ...distributors.map(distributor => `<option value="${distributor.name}">${distributor.name}</option>`)
].join('');
const dropdownHTML = `<select class="form-control" id="distributor" name="distributor" required>${distributorOptions}</select>`;

// Set the dropdown list as the innerHTML of the distributor input field
distributorField.innerHTML = dropdownHTML;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Value of Sending to the Distributor
const form = document.querySelector('.form-send-distributor');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // get input values
  const durianId = document.getElementById('durianid-send').value;
  const distributorNo = document.getElementById('distributor').value;

  // do something with the values (e.g. send to server)
  alert(`Durian ID: ${durianId}, Distributor Name: ${distributorNo}`);
  console.log(`Durian ID: ${durianId}, Distributor Name: ${distributorNo}`);

  // clear input values
  document.getElementById('durianid-send').value = '';
  document.getElementById('distributor').value = '';
});


//Display Durians History
const durians = [
  {
    id: "Durian 1",
    type: "Musang",
    weight: "20g",
    image: "assets/img/durian/durian1.jpg",
    tree: "Tree 1",
  },
  {
    id: "Durian 2",
    type: "XO",
    weight: "25g",
    image: "assets/img/durian/durian2.jpg",
    tree: "Tree 2",
  },
];

const duriansTable = document.getElementById("durians-table");

// Clear the existing HTML inside the table
duriansTable.innerHTML = "";

// Loop through the durians array and generate HTML for each durian detail
durians.forEach((durian) => {
  const durianHTML = `
    <tr>
      <td>
        <div class="d-flex px-2 py-1">
          <div>
            <img src="${durian.image}" class="avatar avatar-sm me-3" alt="">
          </div>
          <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 font-weight-bold text-sm">ID</h6>
            <p class="text-xs text-secondary mb-0 p-details">${durian.id}</p>    
          </div>
        </div>
      </td>
      <td class="align-left">
        <p class="text-xs mb-0 prod-pText">${durian.type}</p>
      </td>
      <td class="align-left text-center text-sm">
        <p class="text-xs mb-0 prod-pText">${durian.weight}</p>
      </td>
      <td class="align-left text-center text-sm">
        <p class="text-xs mb-0 prod-pText">${durian.tree}</p>
      </td>
    </tr>
  `;

  // Append the HTML for this durian to the table
  duriansTable.insertAdjacentHTML("beforeend", durianHTML);
});
