const grid = document.querySelector(".grid");
const gridSizeBtn = document.querySelector("#gridSizeBtn");
let gridSize = 0; 
gridSizeBtn.addEventListener("click", setGridSize);


function createGrid(size) {
    grid.innerHTML = "";
    for(let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.style.width = "100%";
        cell.style.height = "100%";
        cell.addEventListener("mouseover", setRandomColor);
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}

function setGridSize() {
    gridSize = parseInt(prompt("Enter how many rows/columns you'd like."));
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    createGrid(gridSize);
}

function getRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

function setRandomColor(event) {
    event.target.style.backgroundColor = getRandomColor();   
}