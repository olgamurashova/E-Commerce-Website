const openBtn = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");

const menu = document.querySelector(".nav-list");

openBtn.addEventListener("click", () => {
  menu.classList.add("show");
  
});

closeNav.addEventListener("click", () => {
  menu.classList.remove("show");
});

/*FIX NAV*/

const navBar = document.querySelector('.nav');

const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener('scroll', ()=> {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");

  }
})