import { categoryItems } from "../data.js";
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart items amount

export let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cartItems.reduce((acc, item) => (
    item.quantity + acc
  ), 0)
};

// Add to cart

export const addToCart = (id) => {
  let item = cartItems.find((x) => x.id == id);
  if (!item) {
    let product = categoryItems.find((x) => x.id == id);
    product = { ...product, quantity: 1 };
    cartItems.push(product);
   calculation()
  } else {
    alert("Product is already in cart");
  }
  localStorage.setItem('cart', JSON.stringify(cartItems))
};
