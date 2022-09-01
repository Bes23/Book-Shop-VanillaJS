const books = [
  {
    id: 4,
    title: "the fellowship of the ring",
    author: "j.r.r tolkien",
    category: "fantasy",
    price: 25,
    img: "./images/the fellowship of the ring.jpg",
    desc: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.",
  },
  {
    id: 1,
    title: "divine comedy",
    author: "dante alighieri",
    category: "classic",
    price: 20,
    img: "./images/divine comedy.jpg",
    desc: "Belonging in the immortal company of the great works of literature, Dante Alighieri’s poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise—the sphere of universal harmony and eternal salvation.",
  },
  {
    id: 10,
    title: "northen lights",
    author: "philip pulman",
    category: "fantasy",
    price: 20,
    img: "./images/northen ligths.jpg",
    desc: "Belonging in the immortal company of the great works of literature, Dante Alighieri’s poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise—the sphere of universal harmony and eternal salvation.",
  },
];
import display from "./displayProducts.js";
const bestsellerContainer = document.querySelector(".bestseller");

display(books, bestsellerContainer);
