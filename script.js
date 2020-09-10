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

//hårdkodade variabler
let userName = "test";
let userPassword = "1234";

function welcomeORLogin() {
  //testa om personen redan är inloggad eller inte
  if (localStorage.length === 0) {
    logInPage();
  } else {
    welcomePage();
  }
}

function welcomePage() {
  //skapa välomst-vyn
  mainHeader.innerHTML = "Välkommen " + userName + "!";
  mainBody.innerHTML = "Detta är min coola sida";
  mainButton.innerHTML = "Logga ut";
  btnMessage.innerHTML = "Du är inloggad!";
  return;
}

function logInPage() {
  //skapa inloggnings-vyn
  mainHeader.innerHTML = "Logga in!";
  mainBody.innerHTML = "";
  mainBody.appendChild(loginName);
  mainBody.appendChild(loginPassword);
  mainButton.innerHTML = "Logga in";
  btnMessage.innerHTML = " ";
  return;
}

function errorPage() {
  //skapar en error-vyn
  mainHeader.innerHTML = "Oj!";
  mainBody.innerHTML = "";
  mainButton.innerHTML = "Försök igen";
  btnMessage.innerText = "Fel användarnamn eller lösenord...";
  return;
}

//bestämmer förstasidan
welcomeORLogin();
//addEventListener som tar mig till de olika sidorna
mainButton.addEventListener("click", function () {
  //gör variabler av användarens input
  let name = loginName.value;
  let password = loginPassword.value;

  if (mainButton.innerHTML === "Försök igen") {
    //tar en till inloggnings-vyn från Error-vyn
    logInPage();
    return;
  }
  if (mainButton.innerHTML === "Logga ut") {
    //rensar localStorage
    localStorage.clear();
    //Tar en till inloggnings-vyn från välkomst-vyn
    logInPage();
    return;
  }
  if (
    //tar en till välkomst-vyn OM användarnamn och lösenord är correkt
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
    //tar en till error-vyn
    errorPage();
  }
});
