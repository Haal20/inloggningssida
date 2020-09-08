console.log("Hej Världen!");

//skapar variabler till mina objekt på DOM
let lginName = document.getElementById("lginName");
let lginPassword = document.getElementById("lginPassword");
let mainButton = document.getElementById("main-button");
let mainHeader = document.getElementById("main-header");
let mainBody = document.getElementById("main-body");
let btnMessage = document.getElementById("btn-message");
//skapar två hårdkodade variabler som aggerar användarnamn och lösenord
const userName = "test";
const userPassword = "1234";

//skapar funktioner till inloggningssidan
function lgInPage() {
  //skapa användare i localStorage
  //addToLocalStorage(userName, userPassword);
  //skapa sidan som inloggad
  mainHeader.innerHTML = "Välkommen " + userName + "!";
  mainBody.innerHTML = "Detta är min coola sida";
  mainButton.innerHTML = "Logga ut";
  btnMessage.innerHTML = "Du är inloggad!";
  return;
}

function lgOutPage() {
  //rensaLocalStorage
  //localStorage.clear();
  //skapa inloggningssidan igen
  mainHeader.innerHTML = "Logga in!";
  mainBody.innerHTML = `
  <input type="text" class="user-name" id="user-name" placeholder="Username">
  <input type="password" class="pass-word" id="pass-word" placeholder="Password">
  `;
  mainButton.innerHTML = "Logga in";
  console.log("Gå tillbaka till första sidan...");
  return;
}

function lgInFail() {
  //skapar en error sida
  mainHeader.innerHTML = "Oj!";
  mainBody.innerHTML = "...";
  mainButton.innerHTML = "Försök igen";
  btnMessage.innerText = "Fel användarnamn eller lösenord...";
  return;
}

function lgInRetry() {
  //skapa inloggningssidan igen
  console.log("Gå tillbaka till första sidan...");
  return;
}

//addEvent Listener på min knapp som tar mig till de olika sidorna
mainButton.addEventListener("click", function lgIn() {
  //Läser in användarens input
  name = lginName.value;
  password = lginPassword.value;

  //olika vägar beroende på input
  if (mainButton.innerText === "Försök igen") {
    //om man skriver fel lösen eller och vill försöka igen
    lgInRetry();
  }
  if (mainButton.innerText === "Logga ut") {
    //on man vill logga ut från sidan
    lgOutPage();
  }
  if (name === userName && password === userPassword) {
    //om man skriver rätt lösenord
    lgInPage();
  } else {
    //om man skriver fel lösenord
    lgInFail();
  }
});
