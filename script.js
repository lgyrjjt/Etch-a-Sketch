let gridSize = 10;


window.addEventListener("load", () => {
// Data for example

    var data = [
        ["A", "B", "C"],
        ["D", "E", "F"]
    ];
    
// Loop for adding cells

let container = document.getElementById("grid");
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement("div");
            cell.innerHTML = "Hello";
            cell.className = "cell";
            container.appendChild(cell);
    } 
    
    
    
});