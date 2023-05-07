const durianContainer = document.querySelector(".durian-wrapper");

// Durian data
const durians = [
  {
    name: "Durian 1",
    weight: "20g",
    harvestInfo: "Harvest Info 1",
    distributionInfo: "Distribution Info 1",
    retailerInfo: "Retailer Info 1",
    price: "RM 1399.00",
    image: "assets/img/durian/durian1.jpg",
  },
];

// Loop through the durians array and create HTML elements for each durian
for (let i = 0; i < durians.length; i++) {
  const durian = durians[i];

  // Create HTML elements
  const durianItem = document.createElement("div");
  durianItem.className = "durian-card";
  durianItem.innerHTML = `
    <div class="durian-left">
      <div class="durian-header">
        <h1>${durian.name}</h1>
        <h2>Weight: ${durian.weight}</h2>
      </div>
      <div class="durian-main">
        <div class="focus">
          <span>Description</span>
          <span>Details</span>
        </div>
        <p>Harvest Info: ${durian.harvestInfo}</p>
        <p>Distribution Info: ${durian.distributionInfo}</p>
        <p>Retailer Info: ${durian.retailerInfo}</p>
      </div>
      <div class="durian-details">
        <div class="durian-total">
          <h5 style="margin: 0;">Unit Price</h5>
          <p>${durian.price}</p>
        </div>
      </div>
      <div class="durian-btns">
        <a href="#" class="durian-add">Rate Now</a>
      </div>
    </div>
    <div class="durian-right">
      <img src="${durian.image}" alt="${durian.name}">
    </div>
  `;

  // Add the durian item to the container
  durianContainer.appendChild(durianItem);
}

// Rating
$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children("li.star").each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this).parent().children("li.star").each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
      console.log("halo");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt(
      $("#stars li.selected").last().data("value"),
      10
    );
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
      msg =
        "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
  });
});


// Get the button element
const rateButton = document.querySelector('.durian-add');

// Get the popup element
const popup = document.querySelector('.popup');

// Get the close button element
const closeButton = document.querySelector('.close');

// Get the product information element
const productInfo = document.querySelector('#product-info');

// Get the submit button element
const submitButton = document.querySelector('#submit');

// Get the popup stars element
const popupStars = document.querySelectorAll('#popup-stars .popup-star');

// Add event listener to the rate button
rateButton.addEventListener('click', function() {
  // Change the class of the popup to show it
  popup.classList.add('show');

  // Set the product information
  productInfo.textContent = 'Product information goes here';
});

// Add event listener to the close button
closeButton.addEventListener('click', function() {
  // Change the class of the popup to hide it
  popup.classList.remove('show');
});

// Add event listener to the submit button
submitButton.addEventListener('click', function() {
  // Get the selected star value
  let selectedValue = 0;
  for (const star of popupStars) {
    if (star.classList.contains('selected')) {
      selectedValue = star.getAttribute('data-value');
      break;
    }
  }

  // Do something with the selected value, like submit it to a server
});

// Add event listener to the popup stars
for (const star of popupStars) {
  star.addEventListener('click', function() {
    // Remove the selected class from all stars
    for (const s of popupStars) {
      s.classList.remove('selected');
    }

    // Add the selected class to the clicked star
    this.classList.add('selected');
  });
}