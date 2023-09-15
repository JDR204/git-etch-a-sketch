const gridContainer = document.querySelector(".gridContainer");

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    for (let j = 0; j < gridSize; j++) {
        const box = document.createElement("div");       
        box.classList = "box";
        gridContainer.appendChild(column);
        column.appendChild(box);
    }
}