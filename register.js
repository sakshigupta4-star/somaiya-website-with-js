const totalSeats = 50;

let registeredSeats = localStorage.getItem("registeredSeats");
registeredSeats = registeredSeats ? Number(registeredSeats) : 0;

document.getElementById("details").addEventListener("input", function () {

let nameValue = this.value.trim();

if(nameValue.length < 3){
this.style.border = "2px solid red";
}
else{
this.style.border = "2px solid green";
}

});

document.getElementById("email").addEventListener("input", function(){

let emailValue = this.value.trim();
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailValue.match(pattern)){
this.style.border = "2px solid red";
}
else{
this.style.border = "2px solid green";
}

});


document.getElementById("registrationForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("details").value.trim();
let email = document.getElementById("email").value.trim();
let roll = document.getElementById("roll").value.trim();
let eventSelected = document.getElementById("event").value;
let gender = document.querySelector('input[name="gender"]:checked');


if(name === ""){
alert("Please enter your name");
return;
}

if(name.length < 3){
alert("Name must be at least 3 characters");
return;
}


if(email === ""){
alert("Please enter your email");
return;
}

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
alert("Enter valid email address");
return;
}


if(roll === ""){
alert("Enter your roll number");
return;
}

if(roll.length < 2){
alert("Enter valid roll number");
return;
}


if(eventSelected === "----Select Event-----"){
alert("Please select an event");
return;
}


if(!gender){
alert("Please select gender");
return;
}


if(registeredSeats < totalSeats){
registeredSeats++;
localStorage.setItem("registeredSeats", registeredSeats);
alert("Registration successful!");
}
else{
alert("Registration full");
}

});