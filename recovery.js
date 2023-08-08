const form = document.getElementById("form");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (validateRecoveryForm()) {
		console.log("request do backendu");
	} else {
		console.log("error");
	}
});

function validateRecoveryForm() {
  let proceed = true;
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    emailError.classList.add("visible");
    proceed = false;
  }else{
    email.classList.remove("error");
    emailError.classList.remove("visible");
    proceed = true;
  }

  function shouldProceed() {
    if (!v) {
      return false;
    }
    return true;
  }

  return shouldProceed(proceed);
}