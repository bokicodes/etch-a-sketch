
const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    createDiv();
}
mouseoverDivs();


function createDiv(gridSize){
    const div = document.createElement("div");
    div.style.cssText = "width: 24px; height:24px; border: 1px solid black;";
    container.appendChild(div);

    container.style.gridTemplateRows = `repeat(${gridSize},${1}fr)`;
    container.style.gridTemplateColumns =  `repeat(${gridSize},${1}fr)`;
}

function mouseoverDivs(){
    const divList = document.querySelectorAll("div");

    for(let i = 0; i < divList.length; i++){
        divList[i].addEventListener("mouseover", () => {
            divList[i].style.backgroundColor = "blue";
        });
    }
}

const btnChangeGrid = document.querySelector(".btnChangeGrid");

btnChangeGrid.addEventListener("click", () => {
    
    const divList = document.querySelectorAll("div");

    let gridSize = Number(prompt("Enter the number of squares per side for the new grid: "));

    if(gridSize <= 0){
        alert("You need to enter a number larger then 0!")
        return;
    }
    if(gridSize > 60){
        alert("Maximum size is 60 squares!");
        return;
    }
    
    //Deleting the grid
    for(let i = 0; i < divList.length; i++){
        divList[i].remove();
    }

    //Adding new grid
    for(let i = 0; i < gridSize*gridSize; i++){
        createDiv(gridSize);
    }

    mouseoverDivs();
});