/*___________ Getting stuff from the DOM__________*/
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check if email is valid
function isValidEmail

/*______ Listening the submision or the form_____*/
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "email is required");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "password don-t match");
  } else {
    showSuccess(password2);
  }
});
