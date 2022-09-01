import display from "../displayProducts.js";
const productsContainer = document.querySelector('.products-container');

const setupCategories = (products) => {
  let categories = products.reduce(
    (acc, product) => {
      return !acc.includes(product.category)
        ? [...acc, product.category]
        : [...acc];
    },
    ["all"]
  );
  const categoryContainer = document.querySelector(".category-container");
  categoryContainer.innerHTML += categories
    .map((category) => {
      return`<button class="filter-btn">${category}</button>`;
    })
    .join("");

  categoryContainer.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("filter-btn")) {
      let newProducts = [];
      if (element.textContent === "all") {
        newProducts = [...products];
      } else {
        newProducts = products.filter(
          (product) => product.category === e.target.textContent
        );
      }
      display(newProducts, productsContainer, true)
    }
  });
};

export default setupCategories;
