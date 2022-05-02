// let firstValue = parseInt(prompt( "Entrez une premiere valeur" ));
// let operator = prompt("Choisis un opérateur");
// let secondValue = parseInt(prompt( "Entrez une deuxieme valeur" ));


let formulaire = document.getElementById("form");
console.log(formulaire);

let firstValue = parseInt(document.getElementById('premiereValeur').value);
let operator = document.getElementById("operateur").value;
let secondValue = parseInt(document.getElementById("deuxiemeValeur").value);

function getValue() {
    let myButton = document.getElementById("calculer").value;
}


myButton.addEventListener('click', function(event) { 
    switch(operator) {
        case "+":
            console.log(firstValue + secondValue)
        break;
    
        case "-":
            console.log(firstValue - secondValue)
        break;
    
        case "*":
            console.log(firstValue * secondValue)
        break;
    
        case "/":
            console.log(firstValue / secondValue)
        break;
    }
});