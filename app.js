
const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    createDiv();
}
mouseoverDivs();


function createDiv(gridSize){
    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid black; background-color: white;";
    container.appendChild(div);
}

function mouseoverDivs(){
    const divList = document.querySelectorAll("div");

    for(let i = 0; i < divList.length; i++){
        divList[i].addEventListener("mouseover", () => {
            divList[i].style.backgroundColor = "blue";
        });
    }
}


// MAKE NEW GRID BUTTON

const btnChangeGrid = document.querySelector(".btnChangeGrid");

btnChangeGrid.addEventListener("click", () => {
    
    const divList = document.querySelectorAll("div");

    let gridSize = Number(prompt("Enter the number of squares per side for the new grid: "));
    if(!(Number.isInteger(gridSize))){
        alert("Invalid input, enter a whole number!");
        return;
    }

    if(gridSize <= 0){
        alert("You need to enter a number larger then 0!")
        return;
    }
    if(gridSize > 100){
        alert("Maximum size is 100 squares!");
        return;
    }
    
    //Deleting the grid
    for(let i = 0; i < divList.length; i++){
        divList[i].remove();
    }

    //Adding new grid
    container.style.gridTemplateRows = `repeat(${gridSize},${1}fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize},${1}fr)`; //responzivne su kockice zbog ovo 1fr :D
    for(let i = 0; i < gridSize*gridSize; i++){
        createDiv(gridSize);
    }

    mouseoverDivs();
});


// DISABLE GRID LINES BTN
const btnDisableGridLines = document.querySelector(".btnDisableGridLines");
btnDisableGridLines.addEventListener("click", () => {
    const divList = document.querySelectorAll("div");
    for(let i = 0; i < divList.length; i++){
        divList[i].style.border = "none";
    }
    
});
