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

// Régle regex
const regEmail = /^[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+/;
const regFirst = /^[A-Za-z0-9_-]{2,30}$/;
const regLast = /^[A-Za-z0-9_-]{2,30}$/;

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

function messageErreur() {
var x = document.querySelector("erreur").innerText  ;
}


//validation mail
function emailValidation(mailValue)
let mailValue = document.getElementById("email").value;
{
if(mailValue.match(regEmail))
{
alert("Adresse mail validé!");    
document.querySelector("email").style.color = green;
return true;
}
else
{
alert("Adresse mail non valide!");    
document.querySelector("email").style.color = red;
return false;
}
}

