const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});











// // taking kilometers input from the user
// const kilometers = prompt("Enter value in kilometers: ")

// // conversion factor
// const factor = 0.621371

// // calculate miles
// const miles = kilometers * factor

// console.log(`${kilometers} kilometers is equal to ${miles} miles.`);