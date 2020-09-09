console.log("Hej Världen!");

//skapar två input element
let loginName = document.createElement("input");
let loginPassword = document.createElement("input");
//skapar input elements attribut användarnamn
loginName.setAttribute("id", "loginName");
loginName.setAttribute("onfocus", "this.value=''");
loginName.setAttribute("type", "text");
loginName.setAttribute("placeholder", "Skriv användarnamn...");
//Skapar input elements attribut lösenord
loginPassword.setAttribute("id", "loginPassword");
loginPassword.setAttribute("onfocus", "this.value=''");
loginPassword.setAttribute("type", "text");
loginPassword.setAttribute("placeholder", "Skriv lösenord...");

//skapar variabler till mina objekt på DOM
let mainButton = document.getElementById("main-button");
let mainHeader = document.getElementById("main-header");
let mainBody = document.getElementById("main-body");
let btnMessage = document.getElementById("btn-message");

//hårdkokade variabler
let userName = "test";
let userPassword = "1234";

//skapar funktioner till inloggningssidan
function welcomePage() {
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
  mainBody.innerHTML = "";
  mainBody.appendChild(loginName);
  mainBody.appendChild(loginPassword);
  mainButton.innerHTML = "Logga in";
  btnMessage.innerHTML = " ";
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

logInPage();
//addEvent Listener på min knapp som tar mig till de olika sidorna
mainButton.addEventListener("click", function () {
  //Läser in användarens input
  let name = loginName.value;
  let password = loginPassword.value;

  if (mainButton.innerHTML === "Försök igen") {
    //tar en till första sidan från Error sidan
    logInPage();
    return;
  }
  if (mainButton.innerHTML === "Logga ut") {
    //rensa localStorage
    localStorage.clear();
    //Tar en till första sidan från logga in sidan
    logInPage();
    return;
  }
  if (
    mainButton.innerHTML === "Logga in" &&
    name === userName &&
    password === userPassword
  ) {
    //spara inloggad användare i localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userPassword", password);
    welcomePage();
    return;
  } else {
    //Om man skriver fel inlogg
    errorPage();
  }
});
