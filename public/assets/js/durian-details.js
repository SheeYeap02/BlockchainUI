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

// The STARS 
// Rating on tastiness
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
  });
});

// Rating on fragrance
$(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $("#stars2 li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on
  
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children("li.star2").each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this).parent().children("li.star2").each(function (e) {
            $(this).removeClass("hover");
          });
      });
  
    /* 2. Action to perform on click */
    $("#stars2 li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently selected
      var stars = $(this).parent().children("li.star2");
  
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
        console.log("halo");
      }
  
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }
    });
  });

  // Rating on creaminess
$(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $("#stars3 li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on
  
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children("li.star3").each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this).parent().children("li.star3").each(function (e) {
            $(this).removeClass("hover");
          });
      });
  
    /* 2. Action to perform on click */
    $("#stars3 li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently selected
      var stars = $(this).parent().children("li.star3");
  
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
        console.log("halo");
      }
  
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }
    });
  });

  // Rating on rarity
$(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $("#stars4 li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on
  
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children("li.star4").each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this).parent().children("li.star4").each(function (e) {
            $(this).removeClass("hover");
          });
      });
  
    /* 2. Action to perform on click */
    $("#stars4 li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently selected
      var stars = $(this).parent().children("li.star4");
  
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
        console.log("halo");
      }
  
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }
    });
  });




// Get the button element
const rateButton = document.querySelector('.durian-add');
// Get the popup element
const popup = document.querySelector('.popup');
// Get the close button element
const closeButton = document.querySelector('.close');
// Get the durian information element
const durianInfo = document.querySelector('#durian-info');
// Get the submit button element
const submitButton = document.querySelector('#star-submit');
// Get the popup stars element
const popupStars = document.querySelectorAll('#stars .star');
const popupStars2 = document.querySelectorAll('#stars2 .star2');
const popupStars3 = document.querySelectorAll('#stars3 .star3');
const popupStars4 = document.querySelectorAll('#stars4 .star4');

// Get each durian taste type
const tastiness = document.querySelector('#tastiness');
const fragrance = document.querySelector('#fragrance');
const creaminess = document.querySelector('#creaminess');
const rarity = document.querySelector('#rarity');

// Add event listener to the rate button
rateButton.addEventListener('click', function() {
  // Change the class of the popup to show it
  popup.classList.add('show');
  // Set the product information
  durianInfo.textContent = 'Durian Name: ' + durians[0].name + ' (' + durians[0].weight + 'g)';

  // Set the taste type
  tastiness.textContent = 'How about tastiness ? ';
  fragrance.textContent = 'How about fragrance ? ';
  creaminess.textContent = 'How about creaminess ? ';
  rarity.textContent = 'How about rarity ? ';
});

// Add event listener to the close button
closeButton.addEventListener('click', function() {
  // Change the class of the popup to hide it
  popup.classList.remove('show');
});


// Add event listener to the submit button
submitButton.addEventListener('click', function() {
  // Get the selected star value
  let tastinessValue = 0;
  let fragranceValue = 0;
  let creaminessValue = 0;
  let rarityValue = 0;
  for (let star of popupStars) {
    if (star.classList.contains('selected')) {
      tastinessValue = star.getAttribute('data-value');
    }
  }

  for (let star of popupStars2) {
    if (star.classList.contains('selected')) {
      fragranceValue = star.getAttribute('data-value');
    }
  }

  for (let star of popupStars3) {
    if (star.classList.contains('selected')) {
      creaminessValue = star.getAttribute('data-value');
    }
  }

  for (let star of popupStars4) {
    if (star.classList.contains('selected')) {
      rarityValue = star.getAttribute('data-value');
    }
  }
  // Here two ways also get the value of star
  //After get value comment alert
  alert(`
  Tastiness star value: ${tastinessValue}
  Fragrance star value: ${fragranceValue}
  Creaminess star value: ${creaminessValue}
  Rarity star value: ${rarityValue}
  `)
  count = 0;
  // Do something with the selected value, like submit it to a server
});