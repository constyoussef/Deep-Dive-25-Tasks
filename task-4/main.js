async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

async function fetchProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

// Append the project in dom
fetchProducts().then((products) => {
  const productsContainer = document.querySelector(".products-container");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <div class="image">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="content">
        <h1>${product.title}</h1>
        <p>${product.category}</p>
        <div>
          <span>${product.price}$</span>
          <span>Rating: ${product.rating.rate}</span>
        </div>
      </div>
      <button data-id=${product.id}>show details</button>
    `;
    productsContainer.appendChild(productElement);
  });

  // show data card when click on his button
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.onclick = () => {
      fetchProductById(btn.dataset.id).then((data) => {
        alert(data.description);
      });
    };
  });
});
