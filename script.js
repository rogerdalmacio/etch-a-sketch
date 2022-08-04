const container = document.querySelector('.container');
const form = document.querySelector('#setNewGrid');

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
        grid.classList.add('hovered');
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
    newGridSize(gridSize);
})