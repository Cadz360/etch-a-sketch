const sketchContainer = document.querySelector(".sketch-container");
const squaresInput = document.querySelector("input")

const randomRGB = () => {
    return 'rgb(' + Math.round(Math.random()*255) + ',' 
    + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
}

squaresInput.addEventListener("change", () => {
    sketchContainer.replaceChildren();
    for (let i = 0; i < squaresInput.value; i++){
        const column = document.createElement("div")
        column.classList.add("column");
        for(let j = 0; j < squaresInput.value; j++) {
            const row = document.createElement("div");
            row.classList.add("row")
            column.appendChild(row)
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = randomRGB()
            })
        }
        sketchContainer.appendChild(column)
    }

})
