import display from "../displayProducts.js";

const productsContainer = document.querySelector(".products-container");


const setupSearch = (products) => {
  const form = document.querySelector(".input-form");
  const searchInput = document.querySelector(".search-input");

  form.addEventListener("keyup", () => {
    const value = searchInput.value;
    if (value) {
      const newProducts = products.filter((product) => {
        let { title } = product;
        title = title.toLowerCase();
        if (title.startsWith(value)) {
          return product;
        }
      });
      display(newProducts, productsContainer, true )
      if(newProducts.length < 1) {
        productsContainer.innerHTML = `<h3 class="filter-error">
       no products matched your search
       </h3>`;
      }
    } else {
        display(products, productsContainer, true)
    }
  });
};


export default setupSearch;