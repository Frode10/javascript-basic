// ------------- UKE 1 ------------------
// // oppgave 1
const oppgave1 = document.querySelector('.uke01-oppgave01');
const oppgave2 = document.querySelector('.oppgave2');



let losning = "Linket js fil til html uke 1 med <script src=\"uke-1.js\"> i head tag";
oppgave1.innerHTML = `<h1>Her kommer</h1><p>Løsning: ${losning}</p>`;


// oppgave 2
const navn = "Per"; // String
const tall = 2; // Number
const userIsLoggedIn = true; // Boolean
const bilMerke = ["Volvo", "Mercedes", "Trabant", "Vauxhall"]; // Array

// For å vise dette under oppgave2-elementet kan vi for eksempel:
oppgave2.innerHTML = `
    <p>Navn: ${navn}</p>
    <p>Tall: ${tall}</p>
    <p>Logget inn: ${userIsLoggedIn}</p>
    <p>Bilmerker: ${bilMerke.join(", ")}</p>
`;
