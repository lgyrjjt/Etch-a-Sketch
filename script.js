let gridSize = 500;


    
// Loop for adding cells

let container = document.getElementById("grid");
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement("div");
            cell.innerHTML = "";
            cell.className = "cell";
            container.appendChild(cell);
    } ;