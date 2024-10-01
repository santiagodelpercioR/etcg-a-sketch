function createGrid(){
    let div;
    let columna;
    for(let x = 1; x <= 16; x++){
        columna = document.createElement("div");
        for(let i = 1; i  <= 16; i++){
            div = document.createElement("div");
            columna.appendChild(div);
        }
        container.appendChild(columna);
    }
}

const container = document.querySelector(".grid-container");

createGrid();

