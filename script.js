/* Book your lesson button */
const bookBtn = document.getElementById("bookLessonBtn");

bookBtn.addEventListener("click", () => {
  alert(" Thank you! Your lesson has been booked.");
});

/* Burger menu on mobile */
const burger = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
