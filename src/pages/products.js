import "../switchTheme.js";
import "../toggleNav.js";
import setupCategories from "../filters/categories.js";
import setupSearch from "../filters/search.js";
import { categoryItems } from "../data.js";
import display from "../displayProducts.js";
const productsContainer = document.querySelector(".products-container");
import {calculation} from '../cart/cartActions.js'

calculation();

const init = () => {
  display(categoryItems, productsContainer);
  setupCategories(categoryItems);
  setupSearch(categoryItems);
};

init();
