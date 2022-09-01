const data = [
  {
    img: "../images/lotr.png",
    title: "lord of the rings",
    desc: "illustrated edition is currently on sale",
    prevPrice: "60",
    currentPrice: "40",
  },
  {
    img: "../images/potter.webp",
    title: "harry potter",
    desc:"perfect gift for fantasy lovers",
    prevPrice: "150",
    currentPrice: "95",
  },
  {
    img: "https://assets.penguinrandomhouse.com/series-images/series-ROE-triad.png",
    title: "the farseer trilogy",
    desc: "special edition is currently on sale",
    prevPrice: "40",
    currentPrice: "30",
  },
];
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slideContainer.innerHTML = data
  .map((item) => {
    const { img, title, desc, prevPrice, currentPrice } = data;
    return `<div class="slide">
  <img src="${item.img}" alt="${item.title}" class="slide-img" />
  <div class="overlay">
  <h3>${item.title}</h3>
  <h4>${item.desc}</h4>
  <div>
  <span class="prev-price">$ ${item.prevPrice}</span>
  <span class="sale-price">$ ${item.currentPrice}</span>
  </div>
  </div>
  </div>`;
  })
  .join("");

const slides = slideContainer.querySelectorAll(".slide");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

// Show next slide

nextBtn.addEventListener("click", function () {
  console.log("clicked");
  counter++;
  carousel();
});

// Show prev slide

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
