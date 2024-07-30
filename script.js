const sketchContainer = document.querySelector(".sketch-container");

for (i = 0; i < 16; i++){
    const column = document.createElement("div")
    column.classList.add("column");
    for(let j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.classList.add("row")
        column.appendChild(row)
    }
    sketchContainer.appendChild(column)

}   

const grids = document.querySelectorAll(".row")

grids.forEach(grid => {
    grid.addEventListener('mouseenter', () => {
        grid.style.backgroundColor = 'black';
    })
});