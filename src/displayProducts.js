import { addToCart } from "./cart/cartActions.js";



const display = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { id, title, img, price, author } = product;
      return `<div class="category-item">
        <div class="img-holder">
          <img src="${img}" alt="" class="${title}" />
        </div>
        <div class="info-holder">
          <div>
            <h4 id="title">title: ${title}</h4>
            <h4 id="author">author: ${author}</h4>
            <h4 id="price">price: $ ${price}</h4>
            <button class="cart-btn" data-id="${id}">add to cart </button>
          </div>
        </div>
      </div>`;
    })
    .join("");
    
    element.addEventListener('click', function (e) {
      if (e.target.classList.contains('cart-btn')) {
        addToCart(e.target.dataset.id);
      }
    });

};

export default display;
