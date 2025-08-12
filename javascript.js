const DEFAULT_SIZE = 16;
const SIZE_LIMIT = 100;

const container = document.querySelector("#container");

createGrid(DEFAULT_SIZE);



function createGrid(size) {

    for (let row = 0; row < size; row++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row");

        for (let col = 0; col < size; col++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.addEventListener("mouseover", setHovered);
            rowContainer.appendChild(grid);
        }
        container.appendChild(rowContainer);
    }
}

function setHovered(e) {
    e.target.classList.add("hovered");
    e.target.removeEventListener("mouseover", setHovered);
}