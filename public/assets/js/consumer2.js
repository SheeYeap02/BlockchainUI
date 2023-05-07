// // Get the container element to append the boxes to
const duriansContainer = document.querySelector(".durian-container");

// sample durians data
const durians = [
  {
    name: "Durian 1",
    price: "$24.99",
    image: "assets/img/durian/durian1.jpg",
    link: "durian-details.html",
  },
  {
    name: "Durian 2",
    price: "$24.99",
    image: "assets/img/durian/durian2.jpg",
    link: "durian-details.html",
  },
  {
    name: "Durian 3",
    price: "$24.99",
    image: "assets/img/durian/durian3.jpg",
    link: "durian-details.html",
  },
  {
    name: "Durian 4",
    price: "$24.99",
    image: "assets/img/durian/durian4.jpg",
    link: "durian-details.html",
  },
  {
    name: "Durian 5",
    price: "$24.99",
    image: "assets/img/durian/durian5.jpg",
    link: "durian-details.html",
  },
  {
    name: "Durian 6",
    price: "$24.99",
    image: "assets/img/durian/durian6.jpg",
    link: "durian-details.html",
  },
];

for (let i = 0; i < durians.length; i++) {
  const durian = durians[i];
  const durianItem = document.createElement("div");
  durianItem.className = "box";
  durianItem.innerHTML = `
    <img src="${durian.image}" alt="${durian.name}">
    <h2>${durian.name}</h2>
    <span>${durian.price}</span>
    <a href="${durian.link}"><i class='bx bx-chevrons-right'></i></a>
  `;
  duriansContainer.appendChild(durianItem);
}
