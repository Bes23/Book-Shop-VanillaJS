const themeBtn = document.querySelector(".theme-btn");
const switchDiv = document.querySelector(".switch");

if (localStorage.getItem("darkTheme") === null) {
  localStorage.setItem("darkTheme", "false");
}

const checkTheme = () => {
  if (localStorage.getItem("darkTheme") === "true") {
    document.documentElement.classList.add("dark-theme");
    switchDiv.classList.add("slide");
  } else {
    document.documentElement.classList.remove("dark-theme");
    switchDiv.classList.remove("slide");
  }
};

checkTheme();

themeBtn.addEventListener("click", () => {
  switchDiv.classList.toggle("slide");
  if (localStorage.getItem("darkTheme") === "false") {
    localStorage.setItem("darkTheme", "true");
    checkTheme();
  } else {
    localStorage.setItem("darkTheme", "false");
    checkTheme();
  }
});
