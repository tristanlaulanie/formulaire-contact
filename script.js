// script.js
console.log("script.js chargé");

// Récupérer les éléments du DOM
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorPhone = document.getElementById("error-phone");
const form = document.querySelector("form");

// Expressions régulières
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^(0[1-9])(?:[ .-]?(\d{2})){4}$/;

document.addEventListener("DOMContentLoaded", function() {  

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche l'envoi du formulaire
        
        let isValid = true; // variable pour vérifier si tout est valide

        // Validation du nom
        if (!nameRegex.test(nameInput.value)) {
            errorName.style.display = "block";
            isValid = false;
        } else {
            errorName.style.display = "none";
        }

        // Validation de l'email
        if (!emailRegex.test(emailInput.value)) {
            errorEmail.style.display = "block";
            isValid = false;
        } else {
            errorEmail.style.display = "none";
        }

        // Validation du numéro de téléphone
        if (!phoneRegex.test(phoneInput.value)) {
            errorPhone.style.display = "block";
            isValid = false;
        } else {
            errorPhone.style.display = "none";
        }

        // Si tout est valide, vous pouvez soumettre le formulaire (par exemple, en utilisant AJAX)
        if (isValid) {
            // Exemple: form.submit();
        }
    });
});
