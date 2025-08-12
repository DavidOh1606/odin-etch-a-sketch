const SIZE = 16;


const container = document.querySelector("#container");


for (let row = 0; row < SIZE; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row");

    for (let col = 0; col < SIZE; col++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        rowContainer.appendChild(grid);
    }
    container.appendChild(rowContainer);
}
