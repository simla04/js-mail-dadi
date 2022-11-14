// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// let email = document.getElementById("inputEmail");
// function invioDati() {
//     let emailValue = email.value;
//     let emailDatabase = ["francobaresi@mailinator.com", "giovannimuciaccia@gmail.com", "booleanduck@hotmail.it"];



//     emailDatabase.push(emailValue)

//     let checkEmail = false;

//     for (let i = 0; i < emailDatabase.length; i++) {
//         if (emailDatabase[i] == emailValue) {
//             let checkEmail = true;

//             checkEmail = true;
//             console.log(`${emailValue} è presente nella squadra, con posizione: ${i}`);

//         } else {
//             console.log('Congratulazioni hai appena registrato la tua email!');

//         }

//     }

//     if ( emailDatabase[i] != emailValue ) {
//         emailDatabase.push()
//     for (let i = 0; i < emailDatabase.length; i++) {

//     if (  checkEmail == true) {
//         document.getElementById('emailResult').innerHTML = `sei già registrato`;
//     } else {
//         document.getElementById('emailResult').innerHTML = `Benvenuto!`;
//     }
// }

//     console.log(emailDatabase[i])
// }




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer
// let playerWin = 0;
// let pcWin = 0;
// let winPlayer = document.getElementById("playerCount");
// let winPc = document.getElementById("pcCount");
// function startInput() {
//     // VARIABILI            
//     let result = document.getElementById("resultOut");
//     let playerNumber = Math.floor(Math.random() * 6 + 1);
//     let pcNumber = Math.floor(Math.random() * 6 + 1);
//     console.log(playerNumber);
//     console.log(pcNumber);
//     //Condizioni
//     if (playerNumber > pcNumber) {
//         result.innerHTML = `Hai vinto! il tuo numero è ${playerNumber}`;
//         playerWin = playerWin + 1;
//     } else if (playerNumber == pcNumber) {
//         result.innerHTML = `Pareggio! ${playerNumber} e ${pcNumber}! `;
//     } else {
//         result.innerHTML = `Hai perso D: ho fatto ${pcNumber}, Riproviamo?`;
//         pcWin = pcWin + 1;
//     }
//     winPlayer.innerHTML = `Vittorie: ${playerWin}`;
//     winPc.innerHTML = `Perdite: ${pcWin}`;
// }



/*
*Snack3* (Bonus)
Fai inserire un numero, che chiameremo N, all’utente.
    se l'utente inserisce 3
Genera N array,
    bisogna generare 3 array
ognuno formato da 10 numeri casuali da 1 a 100.
    array1 = [2,3,4,5,12,32,45,67,10]....
Ogni volta che ne crei uno, stampalo
*/

let n = parseInt( prompt('Inserisci un numero') );
//lo imposto così fuori dal ciclo intanto
let i = 0;

//andava usato il ciclo while, va continuato ad essere usato finchè il ciclo si blocca perchè diventa false

while( i < n ){
    // console.log(`il numero del ciclo è: $(i)`);

    let array = [];
    //questo permette di creare l'array in quel momento lì. E di passare da una situazione in cui è  vuota a quando ha del contenuto randomico
    while( array.length < 10 ){
        let randomNumber = Math.floor( Math.random() * 100);
        array.push(randomNumber);

    }

    console.log(array)
    //così per ogni numero che inserisco un numero, stampa n 

    i++;
}