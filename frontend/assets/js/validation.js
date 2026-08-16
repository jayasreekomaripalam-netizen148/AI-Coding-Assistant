function validateSignup(){

let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match!");
return false;

}

if(password.length < 6){

alert("Password must be at least 6 characters!");
return false;

}

alert("Account created successfully!");

return true;

}


function validateLogin(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


if(email === "" || password === ""){

alert("Please fill all fields!");
return false;

}

return true;

}

