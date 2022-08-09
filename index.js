// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('activer') ;
  menu.classList.toggle('responsive') ;
})

// Menu class active

const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');

function activeMenu() {
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop);
  li.forEach(ltx => ltx.classList.remove('active'));
  li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu)
