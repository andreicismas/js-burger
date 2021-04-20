// pulsante genera il prezzo ed eventuale sconto 
var pulsanteCalcola = document.getElementById("button");

// nome panino
var nomePanino = document.getElementById("name");

// input cupon con eventuale sconto 
var cupon = document.getElementById("coupon");

// in discount del cupon pari a15% in questo caso 
var scontoCupone = 15;

// un alert con messagiio hai vinto lo sconto 
alert("ai vinto uno sconto")
alert("inserisci nells sezzione discount il tuo cupon (sbt5u339iu61)")

// lista codici sconto 
var cuponScount = ["sbt5u339iu61", "sde7u665vgbn",]

// funtione calcola sconti e giunte pannino 
pulsanteCalcola.addEventListener("click", function () {
    // il costo del panino base
    var costoPanino = 50;

// variabile che selleziona tutti ingredienti che si trovano in HTML
    var opzioniIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");

    console.log(opzioniIngredienti)
// il controllo con for se nella nostra lista /variabile "opzioniIngredienti" sonno checked
    for (var i = 0; i < opzioniIngredienti.length; i++) {
        var ingredienti = opzioniIngredienti[i];

        if (ingredienti.checked) {
            costoPanino += parseInt(ingredienti.value);
        }

    }

    // recupero valore del codice che il utente ha inserito
    var codiceInseritoCliente = cupon.value

    // il controlla tramite una funzione se il codice e presente nella nostra lista
    var isValidNumber = codiceScontato(codiceInseritoCliente, cuponScount)

    if (isValidNumber) {
        var scontoDaFare = scontoCupone * costoPanino / 100
        costoPanino -= scontoDaFare
    }
   
    // il risultato se e  true lo mostriamo in HTML
    document.getElementById("price").innerText = costoPanino


});

    // la funzione numero inserito  del 

function codiceScontato(codiceScount, listaCcodici) {

    var codiceInseritoModificato = codiceScount.toLowerCase()
    var codiceValido = false

    if (listaCcodici.indexOf(codiceInseritoModificato) > -1) {
        codiceValido = true
    }

    return codiceValido

}