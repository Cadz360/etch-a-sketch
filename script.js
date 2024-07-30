const sketchContainer = document.querySelector(".sketch-container");
const squaresInput = document.querySelector("input")

const randomRGB = () => {
    let o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgb(' + o(r()*s) + ',' 
    + o(r()*s) + ',' + o(r()*s) + ')';
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
                console.log(row.style.backgroundColor)
                //keep color that has been initially replaced each grid to from white
                // one option could be manipulating css through dom
                // another option could be making a variable (false default) and turns into true once user triggers mouseover so listener will not trigger again
                //darken grid each mouseover on the same grid
            }, { once: true})
        sketchContainer.appendChild(column)
    }
    }
})
