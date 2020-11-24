const container = document.getElementById('container')



function buildGrid(numberRows,numberCols) {
    let totalNumBoxes = numberRows * numberCols;
    for (let i = 0; i < totalNumBoxes; i++) {
        const buildingBox = document.createElement('div');
        buildingBox.style.height = `${1000/numberCols}px`;
        buildingBox.style.width = `${1000/numberCols}px`;
        container.appendChild(buildingBox);
        i = i ++;
        
    }
}




//main code

buildGrid (16, 16);


// let gridRows = prompt("How many rows in your head? (WARN : It should be no more than 100)");
// let gridCols = prompt("Then, how many columns in your head? (WARN : It should be no more than 100)");

