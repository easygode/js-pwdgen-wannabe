/*Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
Infine scrivi sulla pagina e in console nomecognomecolorepreferito89 (con i valori inseriti dall’utente :zwinkern:)
Buon lavoro!*/

'use strict';

//Chiedi all'utente il suo nome

const firstName = prompt('Inserisci il tuo nome');

//poi chiedi il suo cognome

const lastName = prompt('Inserisci il tuo cognome');

//poi chiedi il suo colore preferito

const favouriteColor = prompt('Inserisci il tuo colore preferito')

//Infine scrivi sulla pagina e in console nomecognomecolorepreferito89

const passwordUser = firstName + lastName + favouriteColor +'89';

console.log ('La tua password è: , passwordUser');

document.querySelector('h1').innerHTML = passwordUser;

