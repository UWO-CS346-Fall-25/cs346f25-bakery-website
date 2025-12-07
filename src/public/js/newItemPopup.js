document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#new-menu-item").addEventListener("click", () => {
        //displays popup
        document.getElementById("overlay").style.display = "block";
        document.getElementById("add-item-popup").style.display = "block";
        document.body.classList.add("no-scroll");
    });

    // closes popup
    document.getElementById("close-popup").addEventListener("click", (event) => {

        let itemNameInput = document.querySelector("#item-name");
        let servingsInput = document.querySelector("#item-servings");
        let priceInput = document.querySelector("#item-price");
        let caloriesInput = document.querySelector("#item-calories");
        let fatInput = document.querySelector("#item-fat");
        let sugarInput = document.querySelector("#item-sugar");
        let proteinInput = document.querySelector("#item-protein");
        let menuTypeInput = document.querySelector("#menu-type");

        document.getElementById("overlay").style.display = "none";
        document.getElementById("add-item-popup").style.display = "none";
        document.body.classList.remove("no-scroll");

        console.log("In " + menuTypeInput.value + " put " + itemNameInput.value + " which costs $" + priceInput.value + ". It is " + 
        servingsInput.value + " and has " + caloriesInput.value + " calories, " + fatInput.value + "g fat, " + 
        sugarInput.value + "g sugar, and " + proteinInput.value + "g protein!");
    })
});