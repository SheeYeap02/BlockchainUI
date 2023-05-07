//Display Durians History
const durians = [
  {
    id: "Durian 1",
    type: "Musang",
    weight: "20g",
    image: "assets/img/durian/durian1.jpg",
    tree: "Tree 1",
    farm: "Farm 1",
    retailer: "Rizky Durian",
    state: "DISTRIBUTED",
  },
  {
    id: "Durian 2",
    type: "XO",
    weight: "25g",
    image: "assets/img/durian/durian2.jpg",
    tree: "Tree 2",
    farm: "Farm 1",
    retailer: "Tiptop Durian",
    state: "DISTRIBUTING",
  },
  {
    id: "Durian 3",
    type: "Red Prawn",
    weight: "22g",
    image: "assets/img/durian/durian3.jpg",
    tree: "Tree 3",
    farm: "Farm 1",
    retailer: "D17",
    state: "CHECKING",
  },
];

//Display Durian Table
const duriansTable = document.getElementById("durians-table");
// Clear the existing HTML inside the table
duriansTable.innerHTML = "";
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
      <td class="align-left text-center text-sm" style="text-align: left !important;">
        <button class="btn btn-lg btn-success btn-receive" type="submit">Approve ?</button>
      </td>
      <td class="align-left text-center text-sm">
        <p class="text-xs mb-0 prod-pText dist-text">${durian.state}</p>
      </td>
    </tr>
  `;

  // Append the HTML for this durian to the table
  duriansTable.insertAdjacentHTML("beforeend", durianHTML);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Value of Input Sending to the Retailer
const form = document.querySelector(".form-send-retailer");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  // get input values
  const durianId = document.getElementById("durianid-send").value;
  const retailerName = document.getElementById("retailer").value;

  // check if durianId and retailerName are present in durians
  const selectedDurian = durians.find((durian) => durian.id === durianId && durian.retailer === retailerName);
  if (selectedDurian) {
    const hasDistributed = durians.find((durian) => durian.state == "DISTRIBUTED" && durian.id === durianId && durian.retailer === retailerName);
    if (hasDistributed) {
      alert(`Durian ID: ${durianId} has been distributed to the Retailer Name: ${retailerName}.`);
    } else {
      alert(`Durian ID: ${durianId}, Retailer Name: ${retailerName} found in durians and its state will change to 'Distributed'.`);
    }
  } else {
    alert(`Durian ID: ${durianId}, Retailer Name: ${retailerName} not found in durians.`);
  }

  // update state of the respective row in the table
  // find index of durian object with specified id
  const durianIndex = durians.findIndex((durian) => durian.id === durianId);
  alert(`${durians[durianIndex].state}`);
  if (durianIndex !== -1) {
    durians[durianIndex].state = "DISTRIBUTED";
  }

  //It got change the state for array index, but the state in durian table below does not change
  //Maybe after sending to retailer, need to retrieve again to update the overall state
  alert(`${durians[durianIndex].state}`);

  let durianTableState = document.querySelectorAll(".durian-name");
  durianTableState.forEach((distTextElement) => {
    const durian_id = distTextElement.textContent;
    if (durian_id == durianId) {
      let state = distTextElement.closest("tr").querySelector(".dist-text");
      state.textContent = "DISTRIBUTED";
      state.classList.add("dist-text-distributed");
    }
  });

  // clear input values
  document.getElementById("durianid-send").value = "";
  document.getElementById("retailer").value = "";
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set the state that is 'Distributed' to green color
let distTextElements = document.querySelectorAll(".dist-text");
distTextElements.forEach((distTextElement) => {
  if (distTextElement.textContent === "DISTRIBUTED") {
    distTextElement.classList.add("dist-text-distributed");
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Check whether the state is Distributed/Distributing
//This mean the durian already been approved for the durian receiving
const durianTableState = document.querySelectorAll(".durian-name");
const buttons_style = document.querySelectorAll(".btn-receive");

buttons_style.forEach((button) => {
  const rowState = button.closest("tr").querySelector(".dist-text").textContent;

  if (rowState === "DISTRIBUTED" || rowState === "DISTRIBUTING") {
    button.textContent = "Received";
    button.classList.remove("btn-success");
    button.classList.add("btn-secondary");
    button.disabled = true;
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// get all the "Receive" buttons in the table
// to change the button enable/disable once they are clicked to approve the durian received
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
    let state = this.closest("tr").querySelector(".durian-name").closest("tr").querySelector(".dist-text");
    state.textContent = "Distributing";

    // do something else with the durian name, like send it to a server
    alert(`Received ${durianName}`);
  });
});
