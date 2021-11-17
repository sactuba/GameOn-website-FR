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
const modalBody = document.querySelector(".modal-body");
const content = document.querySelector(".content");


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
const emailValue = emailInput.value;*/
const birthdateValue = birthdateInput.value; 

//Id des span pour affiche les erruer du formulaire
const firstNameError = document.getElementById("firstNameValidation");
const lastNameError = document.getElementById("lastNameValidation");
const emailError = document.getElementById("emailValidation");
const birthdateError = document.getElementById("birthdateValidation");
const quantityError = document.getElementById("quantityValidation");
const radioBouttonError = document.getElementById("radioBouttonError");
const contentValidation = document.getElementById("validationMessage");
//Régle regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[A-Za-z_-]{2,30}$/;
const tournoiRegex = /^[+]?\d+([.]\d+)?$/;

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

   
const validationName1 = (regexName, valueInput, idValidation) => {
  let value = valueInput.value.trim();
  let valueLength = value.length;
   if(regexName.test(value))
  {
    idValidation.textContent = ""; 
    valueInput.style.borderColor = "green";
    valueInput.style.borderWidth = "2px";
  return true;
  } 
  else if (value == "")  
  {
    idValidation.textContent = "Ce champ est obligatoire!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  } 
  else if (valueLength <= 2)  
  {
    idValidation.textContent = "Veuillez entrer 2 caractères ou plus!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  } 
  else
  {
    idValidation.textContent = "Champ non valide!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  }
}

const validationName2 = (regexName, valueInput, idValidation) => {
  let value = valueInput.value.trim();
  let valueLength = value.length;
   if(regexName.test(value))
  {
    idValidation.textContent = ""; 
    valueInput.style.borderColor = "green";
    valueInput.style.borderWidth = "2px";
  return true;
  } 
  else if (value == "")  
  {
    idValidation.textContent = "Ce champ est obligatoire!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  } 
  else if (valueLength <= 2)  
  {
    idValidation.textContent = "Veuillez entrer 2 caractères ou plus!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  } 
  else
  {
    idValidation.textContent = "Champ non valide!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  }
}
// Fonction pour l'adresse email
const validationEmail = (regexName, valueInput, idValidation) => {
  let value = valueInput.value.trim();
   if(regexName.test(value))
  {
    idValidation.textContent = ""; 
    valueInput.style.borderColor = "green";
    valueInput.style.borderWidth = "2px";
  return true;
  } 
  else if (value == "")  
  {
    idValidation.textContent = "Ce champ est obligatoire!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  } 
  else
  {
    idValidation.textContent = "Champ non valide!"; 
    valueInput.style.borderColor = "#FF4E60";
    valueInput.style.borderWidth = "2px";
    idValidation.style.color = "#FF4E60";
    idValidation.style.fontSize = '12px';
  return false;
  }
}

// Fonction pour la date de naissance
  const validationBirthdate = (valueInput, idValidation) => {
    let value = valueInput.value;
    if(value != "")
    {
      idValidation.textContent = ""; 
      valueInput.style.borderColor = "green";
      valueInput.style.borderWidth = "2px";
    return true;
    } 
    else if (value == "")  
    {
      idValidation.textContent = "Ce champ est obligatoire!"; 
      valueInput.style.borderColor = "#FF4E60";
      valueInput.style.borderWidth = "2px";
      idValidation.style.color = "#FF4E60";
      idValidation.style.fontSize = '12px';
    return false;
    } 
    else
    {
      idValidation.textContent = "Champ non valide!"; 
      valueInput.style.borderColor = "#FF4E60";
      valueInput.style.borderWidth = "2px";
      idValidation.style.color = "#FF4E60";
      idValidation.style.fontSize = '12px';
    return false;
    }
  }

/*   function getAge() { 
    let dateControl = document.querySelector('input[type="date"]'),
        diff = Date.now() - dateControl.getTime(),
        age = new Date(diff); 
    return Math.abs(age.getUTCFullYear());
} */
//Fonction pour le champ  du nombre de tourner deja fait auparavant
const validationQuantity = () => {
  let value = quantityInput.value.trim();
  if (tournoiRegex.test(value)) 
  {
    quantityError.textContent = ""; 
    quantityInput.style.borderColor = "green";
    quantityInput.style.borderWidth = "2px";
    return true;
  }
  else if (typeof value == "string")  
  {
    quantityError.textContent = "Veuillez saisir un nombre!"; 
    quantityInput.style.borderColor = "#FF4E60";
    quantityInput.style.borderWidth = "2px";
    quantityError.style.color = "#FF4E60";
    quantityError.style.fontSize = '12px';
  return false;
  } 
  else
  {
    quantityError.textContent = "Champ non valide!"; 
    quantityInput.style.borderColor = "#FF4E60";
    quantityInput.style.borderWidth = "2px";
    quantityError.style.color = "#FF4E60";
    quantityError.style.fontSize = '12px';
  return false;
} 
}

// Fonction des boutons radio
const radioBouttonValidation = () => {
  let location = document.getElementsByName('location'),
      locationError = document.getElementById('radioBouttonError');
  if (location[0].checked || location[1].checked || location[2].checked || location[3].checked || location[4].checked || location[5].checked){
    locationError.textContent = "validé!"; 
    locationError.style.color = "green";
    locationError.style.fontSize = '12px'; 
    return true
  } else {
      locationError.textContent = "Cochez une case!"; 
    locationError.style.color = "red";
    locationError.style.fontSize = '12px';
    return false
  }
}

// Fonction condition d'utilisation
const conditionValidation = () => {
  let condition = document.getElementsByName('checkbox'),
      conditionError = document.getElementById('conditionError');
  if (condition[0].checked){
    conditionError.textContent = "validé!"; 
    conditionError.style.color = "green";
    conditionError.style.fontSize = '12px';
    return true
  } else {
    conditionError.textContent = "Vous devez vérifier que vous acceptez le termes et conditions!"; 
    conditionError.style.color = "red";
    conditionError.style.fontSize = '12px';
    return false
  }
}


// Fonction validation du formlaire
const btn = document.getElementById("submitClose");
const formulaire = document.forms["reserve"];

function validate() {
  if (conditionValidation && radioBouttonValidation && validationQuantity && validationBirthdate(birthdateInput, birthdateError) && validationName2(nameRegex, firstNameInput, firstNameError) && validationName1(nameRegex, firstNameInput, firstNameError) && validationEmail(emailRegex, emailInput, emailError) === true){
    btn.style.display = "block";
    modalBody.style.padding = "50% 15%";
    modalBody.style.fontSize = "54px";
    modalBody.innerHTML = "<p>Merci! Votre réservation a été valider!</p>";
    return true;
  } else { 
    return false; 
  }
}



function closeModalForm() { 
  modalbg.style.display = "none";
}

btn.addEventListener("click", closeModalForm);




//Validation nom 
firstNameInput.addEventListener('blur', function() {validationName1(nameRegex, firstNameInput, firstNameError);});  
submitInput.addEventListener('click', function(e) { if (validationName1(nameRegex, firstNameInput, firstNameError) === false){ e.preventDefault();}/* else {return true} */});  
 
//Validation prenom
lastNameInput.addEventListener('blur', function() {validationName2(nameRegex, lastNameInput, lastNameError);});  
submitInput.addEventListener('click', function(e) { if (validationName2(nameRegex, lastNameInput, lastNameError) === false){e.preventDefault();}else {return true}});  

//validation email
emailInput.addEventListener('blur', function () {validationEmail(emailRegex, emailInput, emailError);}); 
submitInput.addEventListener('click', function (e) { if (validationEmail(emailRegex, emailInput, emailError) === false){e.preventDefault();}else {return true}}); 

//validation birthdate
birthdateInput.addEventListener('blur', function () {validationBirthdate(birthdateInput, birthdateError);}); 
submitInput.addEventListener('click', function (e) { if (validationBirthdate(birthdateInput, birthdateError) === false){e.preventDefault();}else {return true}}); 

//validation birthdate
quantityInput.addEventListener('blur', function () {validationQuantity}); 
submitInput.addEventListener('click', function (e) {if (validationQuantity() === false){e.preventDefault();}else{return true}}); 

//Validation de bouttons checkbox
submitInput.addEventListener('click', conditionValidation);

//Validation des bouttons radios
submitInput.addEventListener('click', radioBouttonValidation);


//Fonction pour valider le formulaire

