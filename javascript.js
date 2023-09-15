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

const boxes = document.querySelectorAll(".box");
boxes.forEach((div) => {
        div.addEventListener("mouseover", e => {
            e.target.classList.add("hoverEffect");
            console.log(e);
    });
        div.addEventListener("mouseout", e => {
            e.target.classList.remove("hoverEffect");
            console.log(e);
        });
});