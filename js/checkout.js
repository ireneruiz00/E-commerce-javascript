
// Exercise 6
function validate() {
	event.preventDefault()
	var error = 0;
	
	var fName = document.getElementById("fName")
	var fEmail = document.getElementById("fEmail")
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")

	
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress")
	var errorLastN = document.getElementById("errorLastN")
	var errorPassword = document.getElementById("errorPassword")
	var errorPhone = document.getElementById("errorPhone")


	if (fName.value.length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(fName.value)) {
		fName.classList.add("is-invalid");
		errorName.style.display = "block";
		error++;
	} else {
		fName.classList.remove("is-invalid");
		errorName.style.display = "none";
	}

	
	if (fLastN.value.length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(fLastN.value)) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "block";
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
		errorLastN.style.display = "none";
	}

	
	if (fAddress.value.length < 3) {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "block";
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
		errorAddress.style.display = "none";
	}

	
	if (fEmail.value.length < 3 || !fEmail.value.includes("@") || !fEmail.value.includes(".")) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "block";
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
		errorEmail.style.display = "none";
	}


	if (fPassword.value.length < 4 || fPassword.value.length > 8 ||
		!/[a-zA-Z]/.test(fPassword.value) || !/[0-9]/.test(fPassword.value)) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "block";
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
		errorPassword.style.display = "none";
	}

	
	if (fPhone.value.length !== 9 || isNaN(fPhone.value)) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "block";
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
		errorPhone.style.display = "none";
	}
	
	 
	if(error>0){
		alert("There are invalid values in the form");
	}else{
		alert("All fields are valid");
	}
}

