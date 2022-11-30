/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
scrivere quante partite ha vinto il giocatore
scrivere quante partite ha vinto il computer
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! 
*/ 
// let giocatore = Math.round( Math.random() * 6 ) + 1;
// let computer = Math.round( Math.random() * 6 ) + 1;


// document.getElementById('numeroGiocatore').innerText =  `il numero del giocatore è ${giocatore} `;
// document.getElementById('numeroComputer').innerText = `il numero del computer è ${computer} `;

let vittorieGiocatore = [];
let vittorieComputer = [];

// if(giocatore > computer){
//     document.getElementById('risultato').innerText = `Ha vinto: Giocatore`
//     vittorieGiocatore.push('vinto');
// } else if (computer > giocatore){
//     document.getElementById('risultato').innerText = `Ha vinto: Computer`
// } else{
//     document.getElementById('risultato').innerText = `Pareggio`
// }

// document.getElementById('vittorieGiocatore').innerText = `${vittorieGiocatore.length}`

function gioca() {
    // sposto qui i numeri randomici così si estraggono cliccando sul bottone
    let giocatore = Math.round( Math.random() * 6 ) + 1;
    let computer = Math.round( Math.random() * 6 ) + 1;

    document.getElementById('numeroGiocatore').innerText = `il numero del giocatore è: ${giocatore} `;
    document.getElementById('numeroComputer').innerText = `il numero del computer è: ${computer}`;

    if(giocatore > computer){
        document.getElementById('risultato').innerText = `Ha vinto: Giocatore`
        vittorieGiocatore.push('vittoria');
    } else if (computer > giocatore){
        document.getElementById('risultato').innerText = `Ha vinto: Computer`
        vittorieComputer.push('vittoria')
    } else{
        document.getElementById('risultato').innerText = `Pareggio`
    }

    document.getElementById('numeroVittorieGiocatore').innerText = `Il giocatore ha vinto ${vittorieGiocatore.length} volte`;
    document.getElementById('numeroVittorieComputer').innerText = `Il computer ha vinto ${vittorieComputer.length} volte`

}