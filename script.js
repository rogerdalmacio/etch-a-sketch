const container = document.querySelector('.container');
const form = document.querySelector('#setNewGrid');
let hue = 100;

function newGridSize(gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++){
        const divGrid = document.createElement("div");
        divGrid.className = "my-grid";
        container.appendChild(divGrid);
        container.style = `grid-template-columns: repeat(${gridSize}, 1fr)`;
    }

    const myGrid = document.querySelectorAll('.my-grid');

    myGrid.forEach(grid => {
        grid.addEventListener('mouseover', e => {
            const randomColor = Math.floor(Math.random()*360);
            const randomPercent = Math.floor(Math.random()*100);

            grid.style = `background-color: hsl(${randomColor}, ${randomPercent}%, ${hue}%)`;
            if(hue != 0) hue = hue - 2;

    }, {once: true})
})
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    let gridSize;
    for(const [name,value] of data){
        gridSize = value;
    }
    container.innerHTML = '';
    newGridSize(gridSize);
})