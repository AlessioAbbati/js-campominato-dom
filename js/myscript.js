// selezionare gli elementi del DOM
const eleHelp = document.querySelector('.help');
const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');
const elePoint = document.querySelector('.point-user');
const eleText = document.querySelector('.text-lose');
const numRandom = []
let point = 0;

btnPlay.addEventListener('click', function () {
    // nascondere il messaggio
    eleHelp.classList.add('hidden');

    // mostrare la griglia
    eleGrid.classList.remove('hidden');

    // leggere il livello per determinare il numero di celle
    const nCells = parseInt(selectLevel.value);

    // aggiustare lo style della griglia
    eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));

    // generare la griglia
    createGrid(nCells, eleGrid);
});





/* FUNCTION DEFINITIONS */
function createGrid(nCells, eleContainer) {
    console.log(nCells);

    const side = Math.sqrt(nCells);

    // pulisco il container dall'eventuale griglia precedente
    eleContainer.innerHTML = '';

    for (let i = 1; i <= nCells; i++) {
        // creaiamo la cella e la formattiamo
        const eleCell = document.createElement('div');
        eleCell.innerHTML = i;
        eleCell.classList.add('cell');
        eleContainer.append(eleCell);
        // aggiungere l'event listener alla cella appena creata
        eleCell.addEventListener('click', function () {
            console.log(this);
            if (numRandom.includes(i)) {
                console.log('Hai perso');
                this.classList.toggle('bombs');
                eleText.classList.add('text');
                setTimeout(function(){alert("Hai perso!")
                location.reload();
                }, 100);
                
            } else {
                this.classList.toggle('clicked');
                this.classList.toggle('blue');
                point++;
                console.log(point);
                elePoint.innerHTML = point;
            }

            
        });
    }
}

//Genero 16 numeri casuali
getRandom(1, 100, numRandom)
function getRandom(min, max, numbers) {
    while (numbers.length < 16) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    console.log(numbers);
}
