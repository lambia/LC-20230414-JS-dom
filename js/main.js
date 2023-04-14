const element = document.getElementById("saluto");

// console.log("className", element.className);
// console.log("classList", element.classList);

// element.className = "classeTre";

element.className = element.className + " white";
// element.className = element.classList + " classeTre";

console.log("Colore: ", element.style.backgroundColor);

element.style.backgroundColor = "#00FF00";

console.log("Colore: ", element.style.backgroundColor);

// const div = document.querySelector("div.red");

// element.innerText = "<p>paragrafo</p>"; //NON FUNZIONA PER HTML
// element.innerHTML = element.innerHTML + "<p>paragrafo</p>";
element.innerHTML += "<p>paragrafo</p>";
	
// element.innerHTML = element.innerHTML + "Mio testo";
element.append('Mio testo');

// element.innerHTML = "Mio testo anticipato" + element.innerHTML;
element.prepend('Mio testo anticipato');

const inputElement = document.getElementById("inputUtente");

inputElement.value = "testo cambiato";

//GESTIAMO L'EVENTO DI CLICK
// element.addEventListener("nomeEvento", cosaFare);
const bottone = document.getElementById("bottone")
// const link = document.getElementById("link")

//Questa variabile è disponibile nella funzione del click, perchè è globale
var numeroClick = 0;
//Questa variabile non è disponibile nella funzione di click
let x = 15;

bottone.addEventListener("click", function(){
    var variabileMorta = 42; //questa non sarà disponibile fuori da questa function
    let x = 15; //stessa storia
    numeroClick++;
    console.log("UN CLICK! " + numeroClick);
});