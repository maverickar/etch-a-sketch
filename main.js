const container = document.querySelector(".container");

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = getRandomColor();
        }); // can I write this function outside of the for loop or does the Event object not exist otherwise?
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

function getRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return color = "rgb(" + x + "," + y + "," + z + ")";
}