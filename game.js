const container = document.getElementsByClassName('container')

function buildGrid(numberRows,numberCols) {
    let totalNumBoxes = numberRows * numberCols;
    for (let i = 0; i < totalNumBoxes; i++) {
        let builidngBox = document.createElement("div");
        builidngBox.addEventListener("mouseover", () => {

        })


        container.appendChild(builidngBox);

        
    }
}




//main code

let gridRows = prompt("How many rows in your head? (WARN : It should be no more than 100)");
let gridCols = prompt("Then, how many columns in your head? (WARN : It should be no more than 100)");

