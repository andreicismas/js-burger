var pulsanteCalcola = document.getElementById("button");

pulsanteCalcola.addEventListener("click", function () {

    var nomePanino = document.getElementById("name");
    var costoPanino = 10;
    var opzioniIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");
    console.log(opzioniIngredienti)

    for (var i = 0; i < opzioniIngredienti.length; i++) {
        var ingredienti = opzioniIngredienti[i];

        if (ingredienti.cheched) {
            costoPanino += parseInt(ingredienti.value);
        }
    }

 




    // for (var i = 0; i < opzioniIngredienti.length; i++) {
    //     if (opzioniIngredienti[i].checked) {
    //         costoPanino = costoPanino + parseInt(opzioniIngredienti[i].value) + " ";
    //     }
    // }




});