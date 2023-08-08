const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("rememberCheckbox");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (validateLoginForm()) {
		console.log("request do backendu");
	} else {
		console.log("error");
	}
});

function validateLoginForm() {
	let proceed = {
		email: true,
		password: true,
	};
	const emailError = document.getElementById("emailError");
	const passwordError = document.getElementById("passwordError");

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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

	function shouldProceed() {
		for (let key in proceed) {
			if (!proceed[key]) {
				return false;
			}
		}
		return true;
	}
	return shouldProceed(proceed)
}
