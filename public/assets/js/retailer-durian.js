// Set Current Retailer Name 
const retailer_connect = document.querySelector('.retailer-connect');
const retailer_name = "Retailer: Rizky Durian";
retailer_connect.textContent = retailer_name;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Display Durians History
const durians = [
  {
    id: "Durian 1",
    type: "Musang",
    weight: "20g",
    image: "assets/img/durian/durian1.jpg",
    tree: "Tree 1",
    farm: "Farm 1",
    distributor: "Distributor 1",
    retailer: "Rizky Durian",
    state: "DISTRIBUTED",
    price: 0,
  },
  {
    id: "Durian 2",
    type: "XO",
    weight: "25g",
    image: "assets/img/durian/durian2.jpg",
    tree: "Tree 2",
    farm: "Farm 1",
    distributor: "Distributor 2",
    retailer: "Rizky Durian",
    state: "PRICE SETTING",
    price: 0,
  },
  {
    id: "Durian 3",
    type: "Red Prawn",
    weight: "22g",
    image: "assets/img/durian/durian3.jpg",
    tree: "Tree 3",
    farm: "Farm 1",
    distributor: "Distributor 2",
    retailer: "Rizky Durian",
    state: "RETAILING",
    price: 29.99,
  },
  {
    id: "Durian 4",
    type: "Musang",
    weight: "20g",
    image: "assets/img/durian/durian1.jpg",
    tree: "Tree 2",
    farm: "Farm 1",
    distributor: "Distributor 2",
    retailer: "Rizky Durian",
    state: "DISTRIBUTED",
    price: 0,
  },
  {
    id: "Durian 5",
    type: "XO",
    weight: "25g",
    image: "assets/img/durian/durian2.jpg",
    tree: "Tree 1",
    farm: "Farm 2",
    distributor: "Distributor 3",
    retailer: "Rizky Durian",
    state: "PRICE SETTING",
    price: 0,
  },
  {
    id: "Durian 6",
    type: "Red Prawn",
    weight: "22g",
    image: "assets/img/durian/durian3.jpg",
    tree: "Tree 2",
    farm: "Farm 2",
    distributor: "Distributor 3",
    retailer: "Rizky Durian",
    state: "DISTRIBUTED",
    price: 0,
  },
  {
    id: "Durian 7",
    type: "Musang",
    weight: "20g",
    image: "assets/img/durian/durian1.jpg",
    tree: "Tree 3",
    farm: "Farm 1",
    distributor: "Distributor 1",
    retailer: "Rizky Durian",
    state: "DISTRIBUTED",
    price: 0,
  },
  {
    id: "Durian 8",
    type: "XO",
    weight: "25g",
    image: "assets/img/durian/durian2.jpg",
    tree: "Tree 3",
    farm: "Farm 2",
    distributor: "Distributor 1",
    retailer: "Rizky Durian",
    state: "RETAILING",
    price: 27.99,
  },
  {
    id: "Durian 9",
    type: "Red Prawn",
    weight: "22g",
    image: "assets/img/durian/durian3.jpg",
    tree: "Tree 1",
    farm: "Farm 2",
    distributor: "Distributor 2",
    retailer: "Rizky Durian",
    state: "RETAILING",
    price: 35.99,
  },
];

//Display Durian Table
const duriansTable = document.getElementById("durians-table");

// Clear the existing HTML inside the table
duriansTable.innerHTML = "";
durians.forEach((durian) => {  
  let addUnitPriceButton = '';
  if(durian.price === 0 && durian.state == 'PRICE SETTING') {
    addUnitPriceButton = `
    <span class="text-secondary text-xs font-weight-bold">
        <a href="#" class="button button-small edit price-add" title="Edit">
            <i class="fa fa-pencil"></i>
        </a> 
    </span>`;
    //   addUnitPriceButton = `<a href="#popup1"><input class="addBtn" type="submit" value="Add Price" /></a>`;
  } else if(durian.state == 'RETAILING') {
      addUnitPriceButton = `<p class="text-xs mb-0 prod-pText">RM ${durian.price}</p>`;
  } else {
      addUnitPriceButton = `Haven't Approve`;
  }

  const durianHTML = `
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <div>
              <img src="${durian.image}" class="avatar avatar-sm me-3" alt="">
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 font-weight-bold text-sm">ID</h6>
              <p class="text-xs text-secondary mb-0 p-details durian-name">${durian.id}</p>    
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
        <td class="align-left text-center text-sm">
          <p class="text-xs mb-0 prod-pText farm-name">${durian.farm}</p>
        </td>
        <td class="align-left text-center text-sm">
          <p class="text-xs mb-0 prod-pText distributor-name">${durian.distributor}</p>
        </td>
        <td class="align-left text-center text-sm" style="text-align: left !important;">
          <button class="btn btn-lg btn-success btn-receive" type="submit">Approve ?</button>
        </td>
        <td class="align-left text-center text-sm">
          <p class="text-xs mb-0 prod-pText state-text">${durian.state}</p>
        </td>
        <td class="align-left text-center text-sm price-text">
          ${addUnitPriceButton}
        </td>
      </tr>
    `;

  // Append the HTML for this durian to the table
  duriansTable.insertAdjacentHTML("beforeend", durianHTML);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set the state that is 'RETAILING OR PRICE SETTING' to green color
let stateTextElements = document.querySelectorAll(".state-text");
stateTextElements.forEach((stateTextElement) => {
  if (stateTextElement.textContent === "RETAILING") {
    stateTextElement.classList.add("state-text-retailed");
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Check whether the state is RETAILING OR PRICE SETTING
//This mean the durian already been approved for the durian receiving at retail from the distributor
const durianTableState = document.querySelectorAll(".durian-name");
const buttons_style = document.querySelectorAll(".btn-receive");

buttons_style.forEach((button) => {
  const rowState = button.closest("tr").querySelector(".state-text").textContent;

  if (rowState === "RETAILING" || rowState === "PRICE SETTING") {
    button.textContent = "Received";
    button.classList.remove("btn-success");
    button.classList.add("btn-secondary");
    button.disabled = true;
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// get all the "Receive" buttons in the table
// to change the button enable/disable once they are clicked to approve the durian 
// to change the layout of state and price column
const receiveButtons = document.querySelectorAll(".btn-receive");
receiveButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // get the durian name from the row data
    const durianName =
      this.closest("tr").querySelector(".durian-name").textContent;

    // change the button text to "Received"
    this.textContent = "Received";
    this.classList.remove("btn-success");
    this.classList.add("btn-secondary");
    this.disabled = true;

    //add style to this state
    let state = this.closest("tr").querySelector(".state-text");
    state.textContent = "PRICE SETTING";
    // state.classList.add("state-text-retailed");

    //change the price style
    this.closest("tr").querySelector('.price-text').innerHTML = `
    <span class="text-secondary text-xs font-weight-bold">
    <a href="#" class="button button-small edit price-add" title="Edit">
        <i class="fa fa-pencil"></i>
    </a> 
    </span>`;

    // do something else with the durian name, like send it to a server
    alert(`Received ${durianName}`);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Popup form submit for price
// Get the button element
const addPriceButtons = document.querySelectorAll('.price-add');
// Get the popup element
const popup = document.querySelector('.popup');
// Get the close button element
const closeButton = document.querySelector('.close');
// Get the durian information element
const form_durianId = document.querySelector('#durianid');
const form_durianType = document.querySelector('#duriantype');
const form_durianWeight = document.querySelector('#weight');
const form_durianTree = document.querySelector('#tree');
const form_durianState = document.querySelector('#state');
const form_durianFarm = document.querySelector('#farmer');
const form_durianDistributor = document.querySelector('#distributor');
const form_Price = document.querySelector('#price');

// Get the submit button element
const submitButton = document.querySelector('#price-submit');

// Add event listener to the price button
addPriceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const row = button.closest('tr');
        const durianId = row.querySelector('.durian-name').textContent;

        let durian;
        //Get the specific durian on the same row
        durians.forEach(item => {
            if(item.id == durianId)
                durian = {...item};
        });
 
        // Change the class of the popup to show it
        popup.classList.add('show');

        // Set the durian information
        form_durianId.value = durian.id;
        form_durianType.value = durian.type;
        form_durianWeight.value = durian.weight;
        form_durianTree.value = durian.tree;
        form_durianFarm.value = durian.farm;
        form_durianDistributor.value = durian.distributor;
        form_durianState.value = durian.state;
    });
})


// Add event listener to the close button
closeButton.addEventListener('click', function() {
  // Change the class of the popup to hide it
  popup.classList.remove('show');
});

// Add event listener to the submit button
submitButton.addEventListener('click', function() {
    const price = form_Price.value;
    if(price <= 0)  {
        alert(`Durian unit price must be more than 0!!!`)
    } else {
        alert(`The durian unit price you entered is: RM ${price}`)
        durians.forEach(durian => {
            if(durian.id === form_durianId.value) {
                durian.price = price;
            }
        })

        const durianRow = document.querySelectorAll('.durian-name');
        durianRow.forEach(row => {
            let durianName = row.textContent;
            // alert(form_durianId)
            // alert(durianName)
            if(durianName == form_durianId.value) {
                alert(durianName)
                row.closest("tr").querySelector('.price-text').innerHTML = `<p class="text-xs mb-0 prod-pText">RM ${price}</p>`;

                //add style to this row of state
                let state = row.closest("tr").querySelector(".state-text");
                state.textContent = "RETAILING";
                state.classList.add("state-text-retailed");
            }
        })
        popup.classList.remove('show');
    }

    //Note:
    //After can set the price in remix, try to reload to see the edit icon whether will change to the inputted price or not
});
