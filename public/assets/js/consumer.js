//After receive retailer data from remix, change the content below
// const retailers = [
//     {
//       image: 'assets/img/retailer/retailer1.jpg',
//       name: 'Rizky Durian',
//       description: 'Rizky Durian , Durian Premium harga murah',
//       address: '',
//       link: 'consumer2.html'
//     },
//     {
//       image: 'assets/img/retailer/retailer2.jpg',
//       name: 'Tip Top Durian',
//       description: 'We strive to continue delivering excellent durian products and innovate our offerings to ensure you will constantly be satisfied.',
//       address: '',
//       link: 'consumer2.html'
//     },
//     {
//       image: 'assets/img/retailer/retailer3.jpg',
//       name: 'Durian Bear',
//       description: 'Try DURIAN BEAR no-risk guarantee. Get a box of yummy durian or we replace to you for FREE!',
//       address: '',
//       link: 'consumer2.html'
//     },
//     // Add more retailers as needed
//   ];

getRetailers().then((data) => {
  const retailers = [];
  let j = 1;
  for (let i = 0 ; i< data[0].length;i++) {
    const retailer = {
      address: data[0][i],
      name: data[1][i],
      image: "assets/img/retailer/retailer" + j + ".jpg",
      description: "A wonderful durian retailer that serve good durians",
      link: "consumer2.html?add=" + data[0][i],
    };
    j++;
    if (j === 6) j = 1;
    retailers.push(retailer);
  }

  const retailerContainer = document.querySelector('.row');
for (let i = 0; i < retailers.length; i++) {
  const retailer = retailers[i];
  const retailerItem = document.createElement('div');
  retailerItem.className = 'col-lg-4 col-md-6 pt-5 wow fadeInUp';
  retailerItem.dataset.wowDelay = '0.1s';
  retailerItem.innerHTML = `
    <div class="retailer-item d-flex h-100">
      <div class="retailer-img">
        <img class="img-fluid" src="${retailer.image}" alt="${retailer.name}">
      </div>
      <div class="retailer-text p-5 pt-0">
        <div class="retailer-icon">
          <img class="img-fluid rounded-circle" src="${retailer.image}" alt="${retailer.name}">
        </div>
        <h5 class="mb-3">${retailer.name}</h4>
        <p class="mb-4">${retailer.description}</p>
        <a class="btn btn-square rounded-circle" href="${retailer.link}"><i class="bi bi-chevron-double-right"></i></a>
      </div>
    </div>
  `;
  retailerContainer.appendChild(retailerItem);
}

})










