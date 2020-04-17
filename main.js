//Chiedere all'utente il suo nome
var firstName = prompt ('Qual è il tuo nome?');
console.log(firstName);

//Chiedere all'utente il suo cognome
var lastName = prompt ('Qual è il tuo cognome?');
console.log(lastName);
//Chiedere all'utente il suo colore preferito
var favoriteColor = prompt('Qual è il tuo colore preferito?');
console.log(favoriteColor);
//Generare la password utente
var yourPassword = firstName + lastName + favoriteColor + 20;
console.log(yourPassword);

document.getElementById('password').innerHTML = yourPassword
