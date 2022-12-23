const container = document.querySelector(".container");
const btnChangeGrid = document.querySelector(".btnChangeGrid");


for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.style.cssText = "border:1px solid black; width:24px; height:24px";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "blue";
    });
}
