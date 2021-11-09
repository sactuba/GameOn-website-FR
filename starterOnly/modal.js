function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const formId = document.querySelector("#formId");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closemodal = document.querySelectorAll("#close-modal");
const erreur = document.querySelectorAll(".erreur");

//Input du formulaire
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
const birthdateError = document.getElementById("birthdateValidation");

//Régle regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
/* const errorsMessage = (idValidation) => {
  let errorMessage = document.getElementById(idValidation);
  errorMessage.textContent = "Champ non valide!"; 
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = '16px';
}

const validateMessage = (idValidation) => {
  let errorMessage = document.getElementById(idValidation);
  errorMessage.textContent = "TESTE"; 
  errorMessage.style.color = "green";
  errorMessage.style.fontSize = '16px';
} */


// fonction de validation
const validationInput = (regex, value, idValidation) => {
   if(regex.test(value))
  {
    idValidation.textContent = "Champ validé!"; 
    idValidation.style.color = "green";
    idValidation.style.fontSize = '16px';    
  return true;
  } 
  else if (value == "")  
  {
    idValidation.textContent = "Vous devez remplir ce champ!"; 
    idValidation.style.color = "red";
    idValidation.style.fontSize = '16px';
  return false;
  } 
  else
  {
    idValidation.textContent = "Champ non valide!"; 
    idValidation.style.color = "red";
    idValidation.style.fontSize = '16px';
  return false;
  }
}

//Validation nom 
  firstNameInput.addEventListener('blur', function() {validationInput(nameRegex, firstNameValue, firstNameError);}); 
/* const  firstNameCheck = validationInput(nameRegex, firstNameValue, firstNameError); */

//Validation prenom
/* const lastNameCheck = validationInput(nameRegex, lastNameValue, lastNameError);*/
lastNameInput.addEventListener('blur', function() {validationInput(nameRegex, lastNameValue, lastNameError);});  

//validation mail
/* const emailCheck = validationInput(emailRegex, emailValue, emailError);*/
emailInput.addEventListener('blur', function () {validationInput(emailRegex, emailValue, emailError);}); 


//Fonction pour valider le formulaire
formId.addEventListener('submit', function(e) {
  e.preventDefault();
}) ;




/* const firstNameValidation = () => {
  let idValidation =  firstNameError;
if(nameRegex.test(firstNameValue))
{
  idValidation.textContent = "Champ validé!"; 
  idValidation.style.color = "green";
  idValidation.style.fontSize = '16px';    
return true;
} 
else if (firstNameValue == "")  
{
  idValidation.textContent = "Vous devez remplir ce champ!"; 
  idValidation.style.color = "red";
  idValidation.style.fontSize = '16px';
return false;
} 
else
{
  idValidation.textContent = "Champ non valide!"; 
  idValidation.style.color = "red";
  idValidation.style.fontSize = '16px';
return false;
}
}

firstNameInput.addEventListener('blur', firstNameValidation);
 */



//Parcourir les inut du formulaire
const formTable = formId;
[...formTable.elements].forEach((input) => {
  console.log(input);
});