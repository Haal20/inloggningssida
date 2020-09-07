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

//skapar funktioner till inloggningssidan
function lgInPage() {
  //Logga in
  mainHeader.innerHTML = "Välkommen!";
  mainBody.innerHTML = "Detta är min coola sida";
  mainButton.innerHTML = "Logga ut";
  document.getElementById("lginFail").innerHTML = "Du är inloggad!";
  return;
}

function lgOutPage() {
  //logga ut från sida
  console.log("Gå tillbaka till första sidan...");
  return;
}

function lgInFail() {
  //om man skriver fel inlogg eller lösen
  mainHeader.innerHTML = "Oj!";
  mainBody.innerHTML = "...";
  mainButton.innerHTML = "Försök igen";
  document.getElementById("lginFail").innerText =
    "Fel användarnamn eller lösenord...";
  return;
}

function lgInRetry() {
  //
  console.log("Gå tillbaka till första sidan...");
  return;
}
