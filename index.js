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
  while(--len && window.scrollY + 72 < sec[len].offsetTop);
  li.forEach(ltx => ltx.classList.remove('activerr'));
  li[len].classList.add('activerr');
}
activeMenu();
window.addEventListener('scroll', activeMenu)


// Remove responsive menu au click
for(i = 0; i < li.length; i++) {
  li[i].addEventListener('click', () => {
    toggle_menu.classList.remove('activer') ;
    menu.classList.remove('responsive');
  })
}

// Déclaration du formulaire
(function() { 
  'use strict'
  let form = document.getElementById('formulaire'); 
  form.addEventListener('submit', function(event) {
      
      Array.from(form.elements).forEach((input) => { 
          if (input.type !== "submit") { 
              if (!validateFields(input)) { 
                  
                  event.preventDefault();
                  event.stopPropagation();
                  
                  input.classList.remove("is-valid"); 
                  input.classList.add("is-invalid");
                  input.nextElementSibling.style.display = 'block';
              } 
              else {
                  input.nextElementSibling.style.display = 'none';
                  input.classList.remove("is-invalid"); 
                  input.classList.add("is-valid"); 
              }
          }
      });
  }, false)
})()






// Création des fonctions de verefications

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation du nombre de caractéres : MIN & MAX
function validateLenght(input, minLength, maxLength) {
    return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation d'un e-mail
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");
  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}




// Validation des champs de formulaires

function validateFields(input) {
  let fieldName = input.name;
  // Validaton de l'input PRENOM
  if (fieldName == "firstname") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validateLenght(input, 2, 20)) {
          return false;
      }
      if (!validateText(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input MESSAGE
  if (fieldName == "message") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 15, 1500)) {
        return false;
    }
    if (!validateText(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input EMAIL
  if (fieldName == "email") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateEmail(input)) {
        return false;
    }
    return (true);
  }
}


// Popup image au click

const image = Array.from(document.querySelectorAll(".proposition"));
let close = document.querySelector('.popup-image span');
let popupImg = document.querySelector('.popup-image img');
let popup = document.querySelector('.popup-image');

function test() {
  for(let l = 0; l < image.length; l++) {
    image[l].addEventListener('click', () => {
      
    popup.style.display = 'block';
    popupImg.setAttribute('src', "./images/esthetic/es" + l + ".jpg")

      close.addEventListener('click', () => {
        popup.style.display = 'none';
      })
    })
  }
}

test();

