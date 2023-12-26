"use strict";

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // Fonction pour basculer entre le mode clair et sombre
function toggleTheme() {  
  // Sélectionnez le corps de la page
  let body = document.body;

  // Basculez entre les classes dark-mode et light-mode
  body.classList.toggle("dark-mode");

  // Enregistrez le thème actuel dans le stockage local
  let isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Vérifiez le thème actuel lors du chargement de la page
document.addEventListener("DOMContentLoaded", function() {
  let isDarkMode2 = localStorage.getItem("darkMode") === "true";

  // Si le mode sombre était activé, basculez vers le mode sombre
  if (isDarkMode2) {
      toggleTheme();
  }
});
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let mail = document.getElementById('Mail');
let mdp = document.getElementById('mdp');
let button = document.getElementById('submit');

function afficher(e){
  e.preventDefault();
  console.log(nom.value);
  console.log(prenom.value);
  console.log(mail.value);
  console.log(mdp.value);
}
button.addEventListener('click', afficher);
function validatePassword(){
  let passwordError = document.getElementById('mdpError');
  let passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.[!@#$%^&()_+{}[]:;<>,.?~\/-]).{8,}$/;
  if (passwordRegex.test(mdp.value) && mdp.value.length >= 8){
    passwordError.textContent = '';
  }
  else{
    passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
  }
}
mdp.addEventListener('input', validatePassword);
