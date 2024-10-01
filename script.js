function createGrid(h = 16, w = 16){
    let div;
    let columna;
    for(let x = 1; x <= w; x++){
        columna = document.createElement("div");
        for(let i = 1; i  <= h; i++){
            div = document.createElement("div");
            setColorFunctionality(div);
            columna.appendChild(div);
        }
        container.appendChild(columna);
    }
}

function setColorFunctionality(element){
    element.addEventListener("mouseover", (event) => {
        console.log("cambiar");
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
    let height = prompt("Height: ");
    let width = prompt("Width: ");
    deleteGrid();
    createGrid(height, width);
});

createGrid();


