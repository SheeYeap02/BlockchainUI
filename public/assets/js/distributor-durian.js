// Set Current Distributor Name
const currentAd = sessionStorage.getItem("accAddr");

const getDistributorName = async () => {
  const data = await window.contract.methods
    .getDistributorName(currentAd)
    .call();
  console.log(data);
  const distributor_name = data;
  const distributor_connect = document.querySelector(".distributor-connect");
  distributor_connect.textContent = distributor_name;
};

getDistributorName();

getRetailers().then((data) => {
  const retailers = [];

  for (let i = 0; i < data[0].length; i++) {
    const retailer = {
      address: data[0][i],
      name: data[1][i],
    };
    retailers.push(retailer);
  }
  const retailerField = document.getElementById("retailer");
  const retailerOptions = [
    `<option value="default">Select a retailer...</option>`,
    ...retailers.map(
      (retailer) =>
        `<option value="${retailer.address}">${retailer.name}</option>`
    ),
  ].join("");
  const dropdownHTML = `<select class="form-control" id="retailer" name="retailer" required>${retailerOptions}</select>`;

  // Set the dropdown list as the innerHTML of the distributor input field
  retailerField.innerHTML = dropdownHTML;
});

getRetailers();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getDistributorsMyDurians = async () => {
  const data = await window.contract.methods.getAllDurians().call();
  const matchingObjects = [];
  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    if (
      obj.distributionInfo.distributorAddress.toLowerCase() ===
      currentAd.toLowerCase()
    ) {
      // This id has already been processed, add the object to the matching list
      matchingObjects.push(obj);
    }
  }
  console.log(matchingObjects);

  return matchingObjects;
};

let durians;
getDistributorsMyDurians().then((data) => {
  console.log(Array.isArray(data));
  console.log(data.length);
  durians = data.map((durian) => ({
    image: "assets/img/durian/durian1.jpg",
    id: durian[1],
    type: durian[2],
    weight: durian[3],
    tree: durian[5][2],
    farm: durian[5][0],
    state: durian[0],
  }));
  display();
  displayBtn();
  changeBtn();
});

getDistributorsMyDurians();

const duriansTable = document.getElementById("durians-table");

// Clear the existing HTML inside the table
duriansTable.innerHTML = "";
let bb;
// Loop through the durians array and generate HTML for each durian detail
const display = async () => {
  await durians.forEach((durian) => {
    let dState = null;
    switch (Number(durian.state)) {
      // Harvested,          // 0
      // SentToDistributor,  // 1
      // Distributed,        // 2
      // RetailerReceived,   // 3
      // Rated               // 4
      case 0:
        dState = "Harvested";
        bb =
          '<button class="btn btn-lg btn-success btn-receive" type="submit">Approve ?</button>';
        break;
      case 1:
        dState = "Distributing";
        bb =
          '<button class="btn btn-lg btn-secondary disabled btn-receive" type="submit">Received</button>';
        break;
      case 2:
        dState = "Distributed";
        bb =
          '<button class="btn btn-lg btn-secondary disabled btn-receive" type="submit">Received</button>';
        break;
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
        <td class="align-left text-center text-sm" style="text-align: left !important;">
          ${bb}
        </td>
        <td class="align-left text-center text-sm">
          <p class="text-xs mb-0 prod-pText dist-text">${dState}</p>
        </td>
      </tr>
    `;

    // Append the HTML for this durian to the table
    duriansTable.insertAdjacentHTML("beforeend", durianHTML);
  });
};

const displayBtn = async () => {
  // get all the "Receive" buttons in the table
  // to change the button enable/disable once they are clicked to approve the durian received
  const receiveButtons = document.querySelectorAll(".btn-receive");
  receiveButtons.forEach((button) => {
    button.addEventListener("click", async function () {
      // get the durian name from the row data
      const durianId =
        this.closest("tr").querySelector(".durian-name").textContent;
      const tx = await window.contract.methods
        .durianReceived_Distributor(durianId)
        .send({ from: currentAd });
      const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
      if (receipt.status === true) {
        // change the button text to "Received"
        this.textContent = "Received";
        this.classList.remove("btn-success");
        this.classList.add("btn-secondary");
        this.disabled = true;

        //add style to this state
        let state = this.closest("tr").querySelector(".dist-text");
        state.textContent = "Distributing";
      }

      // do something else with the durian name, like send it to a server
      // alert(`Received ${durianName}`);
    });
  });
};

const changeBtn = async () => {
  //Check whether the state is Distributed/Distributing
  //This mean the durian already been approved for the durian receiving
  // const durianTableState = document.querySelectorAll(".durian-name");
  const buttons_style = document.querySelectorAll(".btn-receive");

  await buttons_style.forEach((button) => {
    const rowState = button
      .closest("tr")
      .querySelector(".dist-text").textContent;

    if (rowState === "DISTRIBUTED" || rowState === "DISTRIBUTING") {
      button.textContent = "Received";
      button.classList.remove("btn-success");
      button.classList.add("btn-secondary");
      button.disabled = true;
    }
  });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Value of Input Sending to the Retailer
const form = document.querySelector(".form-send-retailer");
form.addEventListener("submit", async function (event) {
  event.preventDefault(); // prevent form submission

  // get input values
  const durianId = document.getElementById("durianid-send").value;
  const retailerAddr = document.getElementById("retailer").value;

  const durians = await getDistributorsMyDurians();

  // check if durianId and retailerName are present in durians
  // const selectedDurian = durians.find((durian) => durian.id === durianId);
  let selectedDurian;
  for (let i = 0; i < durians.length; i++) {
    if (
      durianId === durians[i].durianId
    ) {
      console.log("hi");
      selectedDurian = durians[i];
      break;
    }
  }
  console.log(selectedDurian);
  if (selectedDurian) {
    const hasDistributed = durians.find(
      (durian) => Number(durian.state) === 0 && durian.id === durianId
    );
    if (hasDistributed) {
      alert(
        `Durian ID: ${durianId} has been distributed to the Retailer Name: ${retailerAddr}.`
      );
    } else {
      const tx = await window.contract.methods
        .distributeDurianToRetail(retailerAddr, durianId)
        .send({ from: currentAd });
      alert(
        `Durian ID: ${durianId}, will distribute to Retailer Name: ${retailerAddr}`
      );
    }
  } else {
    alert(
      `Opps, seems like you do not have this durian(Durian ID: ${durianId}) in your durian list.`
    );
  }

  // update state of the respective row in the table
  // find index of durian object with specified id
  // const durianIndex = durians.findIndex(
  //   (durian) => durian.id === durianId && durian.retailer === retailerName
  // );
  // alert(`${durians[durianIndex].state}`);
  // if (durianIndex !== -1) {
  //   durians[durianIndex].state = "DISTRIBUTED";
  // }

  // //It got change the state for array index, but the state in durian table below does not change
  // //Maybe after sending to retailer, need to retrieve again to update the overall state
  // alert(`${durians[durianIndex].state}`);

  // let durianTableState = document.querySelectorAll(".durian-name");
  // durianTableState.forEach((distTextElement) => {
  //   const durian_id = distTextElement.textContent;
  //   if (durian_id == durianId) {
  //     let state = distTextElement.closest("tr").querySelector(".dist-text");
  //     state.textContent = "DISTRIBUTED";
  //     state.classList.add("dist-text-distributed");
  //   }
  // });

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
