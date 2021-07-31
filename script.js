// The DOM
const container = document.querySelector('#Container') 
const resetButton = document.querySelector('#Reset')

// Event Listeners 
resetButton.addEventListener('click', changeGrids)

// Function
function remove(){
  while(container.firstChild){
    container.removeChild(container.firstChild)
  }
}

function createGrid(numberOfDivs){ 
  for(let i = 0; i < numberOfDivs; i++){ 
      const grid = document.createElement('div')
      grid.classList.add(i);
      grid.style.width =  '100%'
      grid.style.height = '100%'
      grid.style.border = '2px solid black'
      container.appendChild(grid);
      // grid.style.position = 'relative'
      grid.addEventListener('mouseover', ()=>{
      grid.style.backgroundColor = 'coral';
        }); 
    }
  }


function changeGrids(){
    numberOfRowsAndColumn = prompt('What is the area you want? (e.g 16X16). Pick a number between 1-100')
    let numberOfDivs = Number(numberOfRowsAndColumn * numberOfRowsAndColumn)
    remove(); 
    createGrid(numberOfDivs)
    let fractions = '1fr'; 
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${numberOfRowsAndColumn}, ${fractions} )`; 
    container.style.gridTemplateRows = `repeat(${numberOfRowsAndColumn}, ${fractions} )`;
    container.style.width = '500px';
    container.style.height = '500px';
    // container.style.margin = '0 auto';
    // container.style.position = 'absolute' 
    container.style.border = '2px solid black'
  }

 changeGrids() 
 