console.log("Hej Världen!");

//skapar variabler till mina objekt på DOM
let lginName = document.getElementById("lginName");
let lginPassword = document.getElementById("lginPassword");
let mainButton = document.getElementById("main-button");
let mainHeadline = document.getElementById("headline");
let mainBody = document.getElementById("main-body");
//skapar två hårdkodade variabler som aggerar användarnamn och lösenord
const userName = "test";
const userPassword = "1234";

//skapar funktioner till inloggningssidan
function lgInPage() {
  //Logga in
  mainHeadline.innerHTML = "Välkommen!";
  mainBody.innerHTML = "Detta är min coola sida";
  mainButton.innerHTML = "Logga ut";
  document.getElementById("btn-message").innerHTML = "Du är inloggad!";
  console.log(mainHeadline.innerHTML);
  return;
}

function lgOutPage() {
  //logga ut från sida
  console.log("Gå tillbaka till första sidan...");
  return;
}

function lgInFail() {
  //om man skriver fel inlogg eller lösen
  mainHeadline.innerHTML = "Oj!";
  mainBody.innerHTML = "...";
  mainButton.innerHTML = "Försök igen";
  document.getElementById("btn-message").innerText =
    "Fel användarnamn eller lösenord...";
  return;
}

function lgInRetry() {
  //När jag vill försöka skriva lösenordet igen
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
