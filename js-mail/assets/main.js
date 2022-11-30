/*Mail js
Chiedi all’utente la sua email,
controlla che sia già presente nella lista di email per controllare se può accedere,
stampa un messaggio appropriato sull’esito del controllo. */ 

// 1.recuperare l'elemento html input email
let inputEmail = document.getElementById('inputEmail')

// 3.creo array di email esterno
let emailArray = ['luigi@gmail.com', 'tommaso@gmail.com', 'christian@gmail.com', 'laura@gmail.com']

// 4. devo fare un controllo per la presenza o meno di quello che ho scritto nell'input, per verificare se la mail che ha scritto l'utente sia alli0terno dell'array esterna
// ==> posso usare la variabile di controloo o flag o soldatino
let presenzaEmail = false;

// 2.funzione che si attiva al click del bottone
function invioEmail() {
    // recuperare il value dell'input email
    let valueEmail = inputEmail.value;
    // controllo se recupera quello che stampato è sottoforma di stringa 
    // console.log(valueEmail);

    // 4.1 ragioniamo facendo un ciclo for= ciclare tutto l'array per trovare la corrispondenza tra valueEmail ed emailArray
    for(let i=0; i < emailArray.length; i++ ) {
        // controllo elemento crontrollo il dato
        // per recuperare un dato da una posizione ==> nomeArray[posizionechevogliorecuperare]
        // per recupero dinamico uso questa sintassi ==> per recuperare dat per dato, di volta in volta
        // 4.2 thiEmail cambia per ogni elemento singolarmente che trova
        let thisEmail =  emailArray[i];

        if( valueEmail == thisEmail ){
            // se c'è corrispondenza tra la mail inserita nell'input dal'utente e emailArray cambio lo status della variabile flag
            presenzaEmail = true;
        } 
    }

    // fuori dal ciclo  
    // controllo presenza o assenza dell'email sulla base dello staus della variabile di controllo 
    if(presenzaEmail == true){
        document.getElementById('testo').innerText = "l'email è presente nella lista"
    } else {
        document.getElementById('testo').innerText = "ISCRIVITI ORA 😌"
    }
}

