const cartSection = document.querySelector(".cart-section");
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
import { calculation } from "./cartActions.js";

const addToCartDOM = () => {
  if (cartItems.length === 0) {
    cartSection.innerHTML = `<div class="status"><h2>your cart is empty</h2><h3><a href="./products.html">back to shopping</a></h3></div>`;
  }
  cartItems.map((item) => {
    cartSection.innerHTML += `
      <div class="cart-wrapper border">
      <div class="product">
      <img src="${item.img}" alt="${item.title}" />
    </div>
    <div class="actions">
      <button data-id="${item.id}" class="increase-btn">
        <i class="fa-solid fa-plus"></i>
      </button>
      <p class="quantity" id="${item.id}">${item.quantity}</p>
      <button data-id="${item.id}" class="decrease-btn">
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
    <div class="price">
      <span>$ ${item.price}</span>
    </div>
      </div>
        `;
  });
  if (cartItems.length > 0) {
    cartSection.innerHTML += `   </div>
    <div class="cart-wrapper">
      <div class="total-price">
        <h3>total price : $ 60</h3>
      </div>
    </div>`;
  }
};

addToCartDOM();
calculation();

// Display cart total price

const totalPrice = document.querySelector(".total-price h3");
const displayCartTotal = () => {
  let total = cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
  totalPrice.textContent = `Total : $ ${total}`;
};

// Increase cart item quantity

const increaseQuantity = (id) => {
  let newQuantity;
  cartItems = cartItems.map((item) => {
    if (item.id == id) {
      newQuantity = item.quantity + 1;
      item = { ...item, quantity: newQuantity };
    }
    return item;
  });
  return newQuantity;
};

// Decrease cart item quantity

const decreaseQuantity = (id) => {
  let newQuantity;
  cartItems = cartItems.map((item) => {
    if (item.id == id) {
      newQuantity = item.quantity - 1;
      item = { ...item, quantity: newQuantity };
    }
    return item;
  });
  return newQuantity;
};

// Remove cart item

const removeItem = (id) => {
  cartItems = cartItems.filter((item) => item.id != id);
  window.location.reload(true);
};

function setupCartFunctionality() {
  cartSection.addEventListener("click", (e) => {
    const btn = e.target.parentElement;
    const btnID = e.target.parentElement.dataset.id;
    let cartIcon = document.getElementById("cartAmount");
    if (btn.classList.contains("increase-btn")) {
      const newQuantity = increaseQuantity(btnID);
      btn.nextElementSibling.textContent = newQuantity;
      cartIcon.innerHTML = cartItems.reduce(
        (acc, item) => item.quantity + acc,
        0
      );
    }
    if (btn.classList.contains("decrease-btn")) {
      const newQuantity = decreaseQuantity(btnID);
      if (newQuantity === 0) {
        removeItem(btnID);
      } else {
        btn.previousElementSibling.textContent = newQuantity;
        cartIcon.innerHTML = cartItems.reduce(
          (acc, item) => item.quantity + acc,
          0
        );
      }
    }
    displayCartTotal();
    localStorage.setItem("cart", JSON.stringify(cartItems));
  });
}

const init = () => {
  displayCartTotal();
  setupCartFunctionality();
};

init();

export default addToCartDOM;
