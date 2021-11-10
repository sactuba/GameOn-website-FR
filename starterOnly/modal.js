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
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const submitInput = document.getElementById("submitId");

//Value des input
/* const firstNameValue = firstNameInput.value;
const lastNameValue = lastNameInput.value;
const emailValue = emailInput.value;
const birthdateValue = birthdateInput.value; */

//Id des span pour affiche les erruer du formulaire
const firstNameError = document.getElementById("firstNameValidation");
const lastNameError = document.getElementById("lastNameValidation");
const emailError = document.getElementById("emailValidation");
const birthdateError = document.getElementById("birthdateValidation");
const quantityError = document.getElementById("quantityValidation");
const radioBouttonError = document.getElementById("radioBouttonError");

//Régle regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[A-Za-z_-]{2,30}$/;
const birthdateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const tournoiRegex = /([1-9]?[0-9])|100/;

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

// fonction de validation
//fonction pour le nom, prenom
const validationName = (regexName, valueInput, idValidation) => {
  let value = valueInput.value;
  let valueLength = value.length;
   if(regexName.test(value))
  {
    idValidation.textContent = "validé!"; 
    idValidation.style.color = "green";
    idValidation.style.fontSize = '16px';    
  return true;
  } 
  else if (value == "")  
  {
    idValidation.textContent = "Ce champ est obligatoire!"; 
    idValidation.style.color = "red";
    idValidation.style.fontSize = '16px';
  return false;
  } 
  else if (valueLength <= 2)  
  {
    idValidation.textContent = "Veuillez entrer 2 caractères ou plus!"; 
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

// Fonction pour l'adresse email
const validationEmail = (regexName, valueInput, idValidation) => {
  let value = valueInput.value;
   if(regexName.test(value))
  {
    idValidation.textContent = "validé!"; 
    idValidation.style.color = "green";
    idValidation.style.fontSize = '16px';    
  return true;
  } 
  else if (value == "")  
  {
    idValidation.textContent = "Ce champ est obligatoire!"; 
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

// Fonction pour la date de naissance
  /* const validationBirthdate = (regexName, valueInput, idValidation) => {
    let value = valueInput.value;
    if(regexName.test(value))
    {
      idValidation.textContent = "validé!"; 
      idValidation.style.color = "green";
      idValidation.style.fontSize = '16px';    
    return true;
    } 
    else if (value == "")  
    {
      idValidation.textContent = "Ce champ est obligatoire!"; 
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
  } */

//Fonction pour le champ  du nombre de tourner deja fait auparavant
const validationQuantity = (e) => {
  let value = quantityInput.value;
  if (tournoiRegex.test(value)) 
  {
    quantityError.textContent = "validé!"; 
    quantityError.style.color = "green";
    quantityError.style.fontSize = '16px';
    return true;
  }
  else if (typeof value == "string")  
  {
    e.preventDefault();
    quantityError.textContent = "Veuillez saisir un nombre!"; 
    quantityError.style.color = "red";
    quantityError.style.fontSize = '16px';
  return false;
  }
  else
  {
    e.preventDefault();
    quantityError.textContent = "Champ non valide!"; 
    quantityError.style.color = "red";
    quantityError.style.fontSize = '16px';
    return false;
} 
}

// Fonction des boutons radio
const radioBouttonValidation = (e) => {
  let location = document.getElementsByName('location'),
      locationError = document.getElementById('radioBouttonError');
  if (location[0].checked || location[1].checked || location[2].checked || location[3].checked || location[4].checked || location[5].checked){
    locationError.textContent = "validé!"; 
    locationError.style.color = "green";
    locationError.style.fontSize = '16px';
    return true
  } else {
    e.preventDefault();
    locationError.textContent = "Cochez une case!"; 
    locationError.style.color = "red";
    locationError.style.fontSize = '16px';
    return false
  }
}

// Fonction condition d'utilisation
const conditionValidation = (e) => {
  let condition = document.getElementsByName('checkbox'),
      conditionError = document.getElementById('conditionError');
  if (condition[0].checked){
    conditionError.textContent = "validé!"; 
    conditionError.style.color = "green";
    conditionError.style.fontSize = '16px';
    return true
  } else {
    e.preventDefault();
    conditionError.textContent = "Vous devez vérifier que vous acceptez le termes et conditions!"; 
    conditionError.style.color = "red";
    conditionError.style.fontSize = '16px';
    return false
  }
}

//Validation de bouttons checkbox
submitInput.addEventListener('click',conditionValidation);

//Validation des bouttons radios
submitInput.addEventListener('click',radioBouttonValidation);

//Validation nom 
firstNameInput.addEventListener('blur', function() {validationName(nameRegex, firstNameInput, firstNameError);});  
submitInput.addEventListener('click', function() {validationName(nameRegex, firstNameInput, firstNameError);});  
submitInput.addEventListener('submit', function() {validationName(nameRegex, firstNameInput, firstNameError);});  

//Validation prenom
lastNameInput.addEventListener('blur', function() {validationName(nameRegex, lastNameInput, lastNameError);});  
submitInput.addEventListener('click', function() {validationName(nameRegex, lastNameInput, lastNameError);});  
submitInput.addEventListener('submit', function() {validationName(nameRegex, lastNameInput, lastNameError);});  

//validation email
emailInput.addEventListener('blur', function () {validationEmail(emailRegex, emailInput, emailError);}); 
submitInput.addEventListener('click', function () {validationEmail(emailRegex, emailInput, emailError);}); 
submitInput.addEventListener('submit', function () {validationEmail(emailRegex, emailInput, emailError);}); 

//validation birthdate
birthdateInput.addEventListener('blur', function () {validationBirthdate(birthdateRegex, birthdateInput, birthdateError);}); 
submitInput.addEventListener('click', function () {validationBirthdate(birthdateRegex, birthdateInput, birthdateError);}); 
submitInput.addEventListener('submit', function () {validationBirthdate(birthdateRegex, birthdateInput, birthdateError);}); 

//validation birthdate
quantityInput.addEventListener('blur', validationQuantity); 
submitInput.addEventListener('click', validationQuantity); 
submitInput.addEventListener('submit', validationQuantity); 

//Fonction pour valider le formulaire
formId.addEventListener('submit', function(e) {
  e.preventDefault();
}) ;


//Parcourir les inut du formulaire !protoype!
/* const formTable = formId;
[...formTable.elements].forEach((input) => {
  console.log(input);
}); */