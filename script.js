let gridSize = 1000;
let rowSize = 50;

//prompt for colum & row size

let columnInput = prompt("Please enter the size of grid you will like:", "10");

    if (columnInput != null) {
        rowSize = columnInput
        document.getElementById("prompt").innerHTML = "OK so you have chosen a " + columnInput + " x " + columnInput + "grid";
    }



//make table

function makeTable() {
    let Jtable = document.getElementById('pC');

    for(let i = 0; i < rowSize; i++){
        let myrow = document.createElement("tr");
        myrow.id = "row";
        myrow.innerHTML = i;

        Jtable.appendChild(myrow);

    }   
    
     

    

let rowW = document.getElementById("row");

    for(let j = 0; j < rowSize; j++) {
        let myCell = document.createElement("td");
        myCell.innerHTML = "column " + j;

        rowW.appendChild(myCell);



    }

    }


makeTable();

/*
// Loop for adding cells

let container = document.getElementById("grid");
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement("div");
            cell.innerHTML = "";
            cell.className = "cell";
            cell.id = "john";
            container.appendChild(cell);
        
        } ;




    // Change selector on mouseover

 
const selAll = document.querySelectorAll(".cell");

    for (let i = 0; i < gridSize; i++) {
       
        grid.addEventListener('mouseover', (e) => {
        
        e.target.classList.add("cS");
        })};

        

/*
let newcolor = document.querySelector('#john');

    newcolor.addEventListener('mouseover', (e) => {
        e.target.classList.add('cellSelected');
    }
    )

*/
