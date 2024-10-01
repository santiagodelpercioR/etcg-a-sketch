function createGrid(size = 16){
    while(size > 100){
        size = prompt("New Size (max 100): ");
    }
    let pixelSize = 500 / size;

    let div;
    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++){
            div = document.createElement("div");
            div.classList.add("pixel");
            div.style.width = `${pixelSize}px`;  
            div.style.height = `${pixelSize}px`; 
            setColorFunctionality(div);
            container.appendChild(div);
        }
    }
}

function setColorFunctionality(element){
    element.addEventListener("mouseover", (event) => {
        element.style.backgroundColor = "red";
    });
    
}

function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

const container = document.querySelector(".grid-container");
const body = document.querySelector("body");
const btn = document.createElement("button");

body.insertBefore(btn, container);

btn.textContent = "Change grid";

btn.addEventListener("click", (event) => {
    let size = prompt("New Size: ");
    deleteGrid();
    createGrid(size);
});

createGrid();


