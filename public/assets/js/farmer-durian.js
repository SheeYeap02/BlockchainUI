// Set Current Retailer Name
const currentAd = sessionStorage.getItem("accAddr");

const getFarmName = async () => {
  const data = await window.contract.methods.getFarmName(currentAd).call();
  console.log(data);
  const farmer_name = data;
  const farmer_connect = document.querySelector(".farmer-connect");
  farmer_connect.textContent = "Farm: " + farmer_name;
};
getFarmName();

getDistributors().then((data) => {
  const distributors = [];

  for (let i = 0; i < data[0].length; i++) {
    const distributor = {
      address: data[0][i],
      name: data[1][i],
      //more attribute: data[2][i],
      //more attribute: data[3][i],
    };
    distributors.push(distributor);
  }
  // Get the distributor input field
  const distributorField = document.getElementById("distributor");

  // Create the dropdown list of available distributors
  const distributorOptions = [
    `<option value="default">Select a distributor...</option>`,
    ...distributors.map(
      (distributor) =>
        `<option value="${distributor.address}">${distributor.name}</option>`
    ),
  ].join("");
  const dropdownHTML = `<select class="form-control" id="distributor" name="distributor" required>${distributorOptions}</select>`;

  // Set the dropdown list as the innerHTML of the distributor input field
  distributorField.innerHTML = dropdownHTML;
});

getDistributors();

//Display Durians History
getMyDurians().then((data) => {
  console.log(Array.isArray(data));
  const durians = data.map((durian) => ({
    image: "assets/img/durian/durian1.jpg",
    id: durian[1],
    type: durian[2],
    weight: durian[3],
    tree: durian[5][2],
  }));

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
        <p class="text-xs mb-0 prod-pText">${durian.weight}g</p>
      </td>
      <td class="align-left text-center text-sm">
        <p class="text-xs mb-0 prod-pText">${durian.tree}</p>
      </td>
    </tr>
  `;

    // Append the HTML for this durian to the table
    duriansTable.insertAdjacentHTML("beforeend", durianHTML);
  });
});
