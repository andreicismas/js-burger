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

alert("inserisci nells sezzione discount il tuo cupon (jkdsafhfdh6jufds)")
// lista codici sconto 
var cuponScount = ["jkdsafhfdh6jufds", "HYT5GF44RDFV",]
pulsanteCalcola.addEventListener("click", function () {
    var costoPanino = 50;


    var opzioniIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");
    console.log(opzioniIngredienti)

    for (var i = 0; i < opzioniIngredienti.length; i++) {
        var ingredienti = opzioniIngredienti[i];

        if (ingredienti.checked) {
            costoPanino += parseInt(ingredienti.value);
        }

    }

    var codiceInseritoCliente = cupon.value

    var isValidNumber = codiceScontato(codiceInseritoCliente, cuponScount)

    if (isValidNumber) {

        var scontoDaFare = scontoCupone * costoPanino / 100

        costoPanino -= scontoDaFare
    }
    
    document.getElementById("price").innerText = costoPanino


});

function codiceScontato(codiceScount, listaCcodici) {

    var codiceInseritoModificato = codiceScount.toLowerCase()

    var codiceValido = false

    if (listaCcodici.indexOf(codiceInseritoModificato) > -1) {
        codiceValido = true
    }

    return codiceValido

}