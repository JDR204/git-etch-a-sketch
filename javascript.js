const gridContainer = document.querySelector(".gridContainer");

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.classList = "column";
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
    });
});

const topButton = document.querySelector("#topButton button");
topButton.addEventListener("click", e => {
    let newSize = prompt("New grid size? (Max: 100)");
    if (newSize > 0 && newSize <= 100) {
        let columns = document.querySelectorAll(".column");
        columns.forEach((div) => {
            gridContainer.removeChild(div);
        });
        for (let i = 0; i < newSize; i++) {
            const column = document.createElement("div");
            column.classList = "column";
            for (let j = 0; j < newSize; j++) {
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
            });
        });
    }   else {
        alert("Error");
    }
});