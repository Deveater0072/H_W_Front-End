const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const terms = document.getElementById("terms");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (validateRegisterForm()) {
		console.log("request do bacekndu");
	} else {
		console.log("nie ma requesta - bład walidacji");
	}
});

function validateRegisterForm() {
	let proceed = {
		firstname: true,
		lastname: true,
		email: true,
		password: true,
		terms: true,
	};
	const firstNameError = document.getElementById("firstNameError");
	const lastNameError = document.getElementById("lastNameError");
	const emailError = document.getElementById("emailError");
	const passwordError = document.getElementById("passwordError");
	const termsError = document.getElementById("termsError");

	const firstNameRegex = /^[a-zA-Z]{1,19}$/;
	const lastNameRegex = /^[a-zA-Z]{1,19}$/;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

	if (!firstNameRegex.test(firstname.value)) {
		firstname.classList.add("error");
		firstNameError.classList.add("visible");
		proceed.firstname = false;
	} else {
		firstname.classList.remove("error");
		firstNameError.classList.remove("visible");
		proceed.firstname = true;
	}

	if (!lastNameRegex.test(lastname.value)) {
		lastname.classList.add("error");
		lastNameError.classList.add("visible");
		proceed.lastname = false;
	} else {
		lastname.classList.remove("error");
		lastNameError.classList.remove("visible");
		proceed.lastname = true;
	}
	if (!emailRegex.test(email.value)) {
		email.classList.add("error");
		emailError.classList.add("visible");
		proceed.email = false;
	} else {
		email.classList.remove("error");
		emailError.classList.remove("visible");
		proceed.email = true;
	}
	if (!passwordRegex.test(password.value)) {
		password.classList.add("error");
		passwordError.classList.add("visible");
		proceed.password = false;
	} else {
		password.classList.remove("error");
		passwordError.classList.remove("visible");
		proceed.password = true;
	}
  if (!terms.checked) {
    // terms.classList.add("error");
		termsError.classList.add("visible");
		proceed.terms = false;
  } else {
    // terms.classList.remove("error");
		termsError.classList.remove("visible");
		proceed.terms = true;
  }
  function shouldProceed(proceed) {
    for(let key in proceed) {
      if(!proceed[key]) {
        return false;
      }
    }
    return true;
  }

	return shouldProceed(proceed);
}
