var board = [] 
var currentGame = []
var savedGames = [] 

var state = { board: [], currentGame: [], savedGames: [] }

function start(){
    CreateBoard()
    readLocalStora()
    console.log(state.board)
    newGame()
    console.log(state.currentGame)
}

function test(){
    addNumebertogame(1)
    addNumebertogame(2)
    savegame()
    addNumebertogame(3)
    addNumebertogame(4)
    addNumebertogame(5)
    addNumebertogame(6)
    savegame()
    addNumebertogame(7)
    console.log(state.currentGame)
    resetGame()
    console.log(state.currentGame)
}

function removNumbertogame(numberToRemove){
    var newGame = []

    for(var i=0 ; i < state.currentGame.length ; i++){
        var currentNumber = state.currentGame[i]

        if( Number(currentNumber) === Number(numberToRemove)){
            continue
        }
    newGame.push(Number(currentNumber));
    }
    state.currentGame = newGame
    console.log(state.currentGame)
}


function IsNumberingame(Numbercheck){
    if (state.currentGame.includes(Numbercheck)){
        return true    
    } 
    return false
}

function addNumebertogame(addtoaddnumber){

    if (addtoaddnumber < 1 || addtoaddnumber > 60) {
        // console.log("Numero Invalido! <1 OU >60")
        console.error('numero invalido',addtoaddnumber)
        return
    } 
    
    if (state.currentGame.length >= 6){
        console.error('Estamos cheios!',addtoaddnumber)
        return
    }

    if (IsNumberingame(Number(addtoaddnumber))){
        console.error('Numero já está na lista!',addtoaddnumber)
        return
    }


    state.currentGame.push(Number(addtoaddnumber))
    console.log(state.currentGame)
}

function savegame() {
    if(!isgamecomplete()){
        console.error("O jogo não está completo")
        return
    }
    else {
    state.savedGames.push(state.currentGame)
    console.log("jogo salvo!")
    writeLocalStora();
    newGame();
    
    }
}

function resetGame(){
    state.currentGame = []
    console.log("Jogo esvaziado!")
}

function isgamecomplete() {
    if (state.currentGame.length === 6){
        return true
    }
        return false
}

function CreateBoard(){
    state.board = [] 

    for(var i = 1; i <= 60; i++){
        state.board.push(i)
    }
}

function newGame(){
    resetGame()
    render()
}

function render(){
    renderboard()
    renderbuttons()
    renderSalveGames()
}

function renderboard(){
    var divBoard = document.querySelector("#megasena-board");
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');
    ulNumbers.classList.add('mumbers')


    for (var i = 0 ; i < state.board.length ; i++){
        var currentNumber = state.board[i]
        
        var liNumber = document.createElement('li')
        liNumber.classList.add('mumbers_1')
        liNumber.textContent = currentNumber;
        liNumber.addEventListener('click', handlenumberclick);

        if(IsNumberingame(Number(currentNumber) )){
            liNumber.classList.add('selected-number');
        }
        
        ulNumbers.appendChild(liNumber)
    }

    divBoard.appendChild(ulNumbers)
}

function handlenumberclick(event){
    var value = event.currentTarget.textContent
    if (IsNumberingame(value)){
        removNumbertogame(value)
    }else{
        addNumebertogame(value)
    }
    console.log(state.currentGame)
    render();
}


function renderbuttons(){
    var divButons = document.querySelector("#megasena-buttons"); 
    divButons.innerHTML = ''

    // divButons.textContent = "teste"

    var buttonnewgame = createnewgame();
    var buttonRandonGame = createRandonGame(); 
    var buttonSaveGame = createSaveGame();

    divButons.appendChild(buttonnewgame)
    divButons.appendChild(buttonRandonGame)
    divButons.appendChild(buttonSaveGame)

} 


function createSaveGame(){
    var button = document.createElement('button')
    button.textContent = 'Salve Game'
    button.disabled = !isgamecomplete();
    
    button.addEventListener('click',savegame);
    console.log(state.currentGame)

    return button;

}

function createRandonGame(){
    var button = document.createElement('button')
    button.textContent = 'Randon Game'
    
    button.addEventListener('click',randonGame);

    console.log(state.currentGame)

    return button;

}

function createnewgame(){
    var button = document.createElement('button')
    button.textContent = 'Novo Jogo'
    
    button.addEventListener('click',newGame);

    console.log(state.currentGame)

    return button;

}

function randonGame(){
    resetGame();
    
    while(!isgamecomplete()){
        var randonNumber = Math.ceil(Math.random() * 60);
        addNumebertogame(randonNumber)
    }

    console.log(state.currentGame)
    render()
}


function renderSalveGames(){
    var divsavedGames = document.querySelector('#megasena-saved-games')
    divsavedGames.innerHTML = '';
    readLocalStora()

    if (state.savedGames.length == 0){
        divsavedGames.innerHTML = '<p>Nenhum jogo salvo</p>'
    }
    else{

        var ulSalvedgames = document.createElement('ul')

        for(var i = 0; i < state.savedGames.length; i++){
            var currentGame = state.savedGames[i]

            var liGame = document.createElement('li')
            liGame.textContent = currentGame.join(', ');

            ulSalvedgames.appendChild(liGame)
        }

        divsavedGames.appendChild(ulSalvedgames);
    }


}

function readLocalStora() {
    if(!window.localStorage){
        return
    }
    var savedGamesfromlocalstorage = window.localStorage.getItem('save-games');
    console.log(savedGamesfromlocalstorage)

    if(savedGamesfromlocalstorage){
        state.savedGames = JSON.parse(savedGamesfromlocalstorage)
    }
}

function writeLocalStora() {
    window.localStorage.setItem('save-games', JSON.stringify(state.savedGames) );
}




start();
