var pulsanteCalcola = document.getElementById("button");

// alert("ai vinto un sconto")

// alert("inserisci nells sezzione discount il tuo cupon HTD3I459KSA")

pulsanteCalcola.addEventListener("click", function () {

    var nomePanino = document.getElementById("name");

    var cupon = document.getElementById("coupon");
    cupon = "HTD3I459KSA"
    var costoPanino = 50;

    var opzioniIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");
    console.log(opzioniIngredienti)

    for (var i = 0; i < opzioniIngredienti.length; i++) {
        var ingredienti = opzioniIngredienti[i];

        if (ingredienti.checked) {
            costoPanino += parseInt(ingredienti.value);
        } 
        
    }

    var prezzoTotale = document.getElementById("price").innerText = costoPanino

   



});