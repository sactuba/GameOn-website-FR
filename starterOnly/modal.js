function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closemodal = document.querySelectorAll("#close-modal");
const erreur = document.querySelectorAll(".erreur");

//Value des input
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birhdateInput = document.getElementById("birthdate");

//Value des input
const firstNameValue = firstNameInput.value;
const lastNameValue = lastNameInput.value;
const emailValue = emailInput.value;
const birhdateValue = birhdateInput.value;

//Id des span pour affiche les erruer du formulaire
const firstNameError = document.getElementById("firstNameValidation");
const lastNameError = document.getElementById("lastNameValidation");
const emailError = document.getElementById("emailValidation");
const birhdateError = document.getElementById("birthdateValidation");

// Régle regex
const emailRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const nameRegex = /^[A-Za-z0-9_-]{2,30}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event 
closemodal.forEach(elt => elt.addEventListener("click", closeModal));

//Fermez le modal
function closeModal() { 
  modalbg.style.display = "none";
}


// Message d'erreur et de validation
const errorsMessage = (idValidation) => {
  let errorMessage = document.getElementById(idValidation);
  errorMessage.textContent = "Champ non valide!"; 
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = '16px';
}

const validateMessage = (idValidation) => {
  let errorMessage = document.getElementById(idValidation);
  errorMessage.textContent = "Champ validé!"; 
  errorMessage.style.color = "green";
  errorMessage.style.fontSize = '16px';
}


// fonction de validation
const validationInput = (regex, value, idValidation) => {
  if(regex.test(value))
  {
  validateMessage(idValidation);     
  return true;
  } 
  else
  {
    errorsMessage(idValidation) ; 
  return false;
  }
}
//Validation nom 
const firstNameValidation = validationInput(nameRegex, firstNameValue, firstNameError);
firstNameInput.addEventListener('blur', firstNameValidation); 

//Validation prenom
const lastNameValidation = validationInput(nameRegex, lastNameValue, lastNameError);
lastNameInput.addEventListener('blur', lastNameValidation); 

//validation mail
const emailValidation = validationInput(emailRegex, emailValue, emailError);
emailInput.addEventListener('blur', emailValidation); 
