const sketchContainer = document.querySelector(".sketch-container");
const squaresInput = document.querySelector("input")

const randomRGB = () => {
    let o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgb(' + o(r()*s) + ',' 
    + o(r()*s) + ',' + o(r()*s) + ',' + 0.1 +')';
}


squaresInput.addEventListener("change", () => {
    sketchContainer.replaceChildren();
    for (let i = 0; i < squaresInput.value; i++){
        const column = document.createElement("div")
        column.classList.add("column");
        for(let j = 0; j < squaresInput.value; j++) {
            const row = document.createElement("div");
            row.classList.add("row")
            column.appendChild(row);
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = randomRGB()
            }, { once: true});
            const controller = new AbortController()
            let bgOpacity = 0.1;
            row.addEventListener('mouseenter', () => {
                //This event listener only fires after background color for each grid has been set
                //Each time this listener gets fired, it will get the value of the BG color of each grid
                //Then, increment opacity by 0.1 or 10% up to max opacity
                if (bgOpacity >= 0.2 && bgOpacity <= 1) {
                    console.log(Math.round(bgOpacity * 10) / 10)
                    let newOpacity = Math.round(bgOpacity * 10) / 10
                    let oldOpacity = Math.round((bgOpacity - 0.1) * 10) / 10
                    let bgColor = row.style.backgroundColor
                    row.style.backgroundColor = bgColor.replace(`${oldOpacity}`, `${newOpacity}`)
                } else if(bgOpacity > 1) {
                    controller.abort()
                }
                bgOpacity += 0.1
            }, {signal: controller.signal})
        }
        sketchContainer.appendChild(column)
    }
    }
)
