// Set the human age.
// Ingresar la edad humana.
let myAge = 1;

// Creating a varible for the early years.
// Creando la variable de los primeros años.
let earlyYears = 2;

earlyYears = earlyYears * 10.5;
console.log(`Dog years for the first 2 years: ${earlyYears}.`);

// Setting a number since we accounted for the early years.
// Ingresando un número dado que contabilizamos los primeros años. 
let laterYears = myAge - 2;

// Calculating the later years in dog years.
// Calculando los últimos años en años caninos (o perrunos :P)
laterYears *= 4;
console.log(`Dog years for the years after that: ${laterYears}.`);

// Creating a variable to hold my human years in dog years.
// Creando una variable para contener mis años humanos en años caninos.
let myAgeInDogYears = earlyYears + laterYears;

// Creating a variable for my name.
// Creando una variable para mi nombre.
const myName = 'Jonathan Kim'.toLowerCase();

// Creating the console result in a readable way.
// Creando el resultado de la consola de manera más legible.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);