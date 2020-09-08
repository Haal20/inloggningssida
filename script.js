console.log("Hej Världen!");

//skapar två input element
let loginName = document.createElement("input");
let loginPassword = document.createElement("input");
//skapar input elementens attribut
loginName.setAttribute("id", "loginName");
loginName.setAttribute("onfocus", "this.value=''");
loginName.setAttribute("type", "text");
loginName.setAttribute("placeholder", "Skriv användarnamn...");
//Skapar input elements attribut 2
loginPassword.setAttribute("id", "loginPassword");
loginPassword.setAttribute("onfocus", "this.value=''");
loginPassword.setAttribute("type", "text");
loginPassword.setAttribute("placeholder", "Skriv lösenord...");

//skapar variabler till mina objekt på DOM
let mainButton = document.getElementById("main-button");
let mainHeader = document.getElementById("main-header");
let mainBody = document.getElementById("main-body");
let btnMessage = document.getElementById("btn-message");

//skapar funktioner till inloggningssidan
function welcomePage() {
  //skapar två hårdkodade variabler som aggerar användarnamn och lösenord
  //skapa användare i localStorage
  //addToLocalStorage(userName, userPassword);
  //skapa sidan som inloggad
  mainHeader.innerHTML = "Välkommen " + userName + "!";
  mainBody.innerHTML = "Detta är min coola sida";
  mainButton.innerHTML = "Logga ut";
  btnMessage.innerHTML = "Du är inloggad!";
  return;
}

function logInPage() {
  //skapa inloggningssidan igen
  mainHeader.innerHTML = "Logga in!";
  mainBody.appendChild(loginName);
  mainBody.appendChild(loginPassword);
  mainButton.innerHTML = "Logga in";
  btnMessage.innerHTML = " ";
  console.log("Gå tillbaka till första sidan...");
  return;
}

function errorPage() {
  //skapar en error sida
  mainHeader.innerHTML = "Oj!";
  mainBody.innerHTML = "";
  mainButton.innerHTML = "Försök igen";
  btnMessage.innerText = "Fel användarnamn eller lösenord...";
  return;
}

//addEvent Listener på min knapp som tar mig till de olika sidorna
mainButton.addEventListener("click", function logIn() {
  //skapar två hårdkodade variabler som aggerar användarnamn och lösenord
  const userName = "test";
  const userPassword = "1234";
  //Läser in användarens input
  name = loginName.value;
  password = loginPassword.value;

  console.log("Syns jag här?");

  if (mainButton.innerHTML === "Försök igen") {
    //tar en till första sidan från Error sidan
    logInPage();
    return;
  }
  if (mainButton.innerHTML === "Logga ut") {
    //Tar en till första sidan från logga in sidan
    logInPage();
    return;
  }
  if (mainButton === "Logga in") {
    console.log("Syns jag här?  if()");

    //om man skriver rätt lösenord
    if (name === userName && password === userPassword) {
      welcomePage();
      return;
    }
  } else {
    //Om man skriver fel inlogg
    errorPage();
  }
});
