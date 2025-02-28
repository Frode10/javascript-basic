// if med template literals
// const userName = "Tomas"
// let userAge = 19
// const userIsAdmin = true

// /* > er mindre enn 18 -  < er større enn 18 */
// if (userAge >= 18) {
//     console.log(`welcome ${userName} you are ${userAge}`)
// } else if (userIsAdmin) {
//     console.log("User denied")
// } else {
// console.log("User access denied ")    
// }

// Ternary - forkortet if/else
// øl? eller saft
// let drink = "";

// if (userAge >= 18) {
//     drink = "Øl"; /* trenger ikke let foran for nytt innhold i variabel */
//  } else {
//     drink = "Saft";
//     }
//     console.log(drink); 

let userAge = 19
    const drink = userAge >= 18 ? "Øl" : "Saft";
    console.log(drink);

/*Ikke bruk == */
console.log(5 == "5")

/*Bruk === triple er lik */
console.log(5 === "5")

