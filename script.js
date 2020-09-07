console.log("Hej Världen!");

//skapar variabler till mina objekt på DOM
let lginName = document.getElementById("lginName");
let lginPassword = document.getElementById("lginPassword");
let mainButton = document.getElementById("main-button");
let mainHeader = document.getElementById("main-header");
let mainBody = document.getElementById("main-body");
//skapar två hårdkodade variabler som aggerar användarnamn och lösenord
const userName = "test";
const userPassword = "1234";

mainButton.addEventListener("click", function lgIn() {
  name = lginName.value;
  password = lginPassword.value;

  if (name === userName && password === userPassword) {
    console.log(name + " is logged in!!!");
    return;
  } else {
    console.log("Fel användarnamn eller lösenord. Försök igen...");
    return;
  }
});
