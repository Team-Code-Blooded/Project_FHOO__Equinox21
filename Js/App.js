// Dropdown animation on navigation bar 
const dropMenu = document.getElementsByClassName("dropdown");
const dropMenu1 = document.getElementsByClassName("dropdown1");
const submit = document.getElementById("submit");
const msg = document.getElementById("msg");
const form = document.getElementById("form");

function myFunction_1(event) {
    event.stopPropagation();
    dropMenu[0].classList.toggle("show");
    dropMenu[1].classList.remove("show");
}

function myFunction_2(event) {
    event.stopPropagation();
    dropMenu[1].classList.toggle("show");
    dropMenu[0].classList.remove("show");
}

function myFunction_3(event) {
    event.stopPropagation();
    dropMenu1[0].classList.toggle("show");
}

// Close dropdown when clicked anywhere on window
window.onclick = function(event) {
    dropMenu[0].classList.remove("show");
    dropMenu[1].classList.remove("show");
    dropMenu1[0].classList.remove("show");
}

function Redirect_home() {
    location.href = "/index.html";
}

function Redirect_login() {
    location.href = "/HTML/login_page.html";
}

function Redirect_afterlogin() {
    location.href = "/HTML/afterlogin_homepage.html";
}

function Redirect_signup() {
    location.href = "/HTML/signup.html";
}

function Redirect_medical() {
    location.href = "/HTML/medical_requirement.html";
}

function Redirect_blood() {
    location.href = "/HTML/blood_bank.html";
}

function Redirect_food() {
    location.href = "/HTML/food_bank.html";
}

function Redirect_userdashboard() {
    location.href = "/HTML/user_dashboard.html";
}

function Redirect_volunteer() {
    location.href = "/HTML/volunteer.html";
}

function Redirect_donate() {
    location.href = "/HTML/donate_edu.html";
}

function Redirect_virtualpet() {
    location.href = "/HTML/virtual_pet.html";
}

function Redirect_launchreq() {
    location.href = "/HTML/launch_request.html";
}
// Success message and reset form
submit.addEventListener("click", function() {
    msg.innerHTML = "Your Message has been sent successfully.";
    form.reset();
});