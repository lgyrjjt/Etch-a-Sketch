let rowSize = 10;
let colSize = 10;


//prompt for column & row size

let columnInput = prompt("Please enter the size of grid you will like:", "10");

if (columnInput > 100) {
    alert("For a smoother experiance - please choose a grid size under 100")
    startOver();

} else if (columnInput != null) {
        
        document.getElementById("prompt").innerHTML = "OK so you have chosen a " + columnInput + " x " + columnInput + "grid";
    
    
    console.log(typeof columnInput);
   
    console.log(typeof Number(columnInput));
    console.log(parseInt(columnInput, 10));
    colSize = parseInt(columnInput);
    console.log(typeof columnInput);

   
}

//make table

function makeTable() {
    let Jtable = document.getElementById('pC2');

    for(let i = 0; i < colSize; i++){
        let myrow = document.createElement("tr");
        myrow.id = "row" + i;
        myrow.className = "cell";
        
       

        Jtable.appendChild(myrow);

     
    
     

    

let rowW = document.getElementById("row" + i);

    for(let j = 0; j < colSize; j++) {
        let myCell = document.createElement("td");
        
        myCell.className = "cell";

        rowW.appendChild(myCell);

    }

    }

    let newcolor = document.getElementById('pC2');

    newcolor.addEventListener('mouseover', (e) => {
        e.target.classList.add('cS');
    }
    );

    }

   


makeTable();

// Function to reset page on button click 

function startOver() {
    location.reload();

}





