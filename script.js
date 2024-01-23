const game = document.querySelectorAll('.game');
const options = ['rock', 'scissors', 'paper'];
const playerWinCount = localStorage.getItem("player")?localStorage.getItem("player"):0;
const pcWinCount = localStorage.getItem("pc")?localStorage.getItem("pc"):0;
var playerWonBool = false;

function start(){
    const playerScore = document.getElementById('player_score');
    const pcScore = document.getElementById('pc_score');
    if(playerScore)
    playerScore.innerHTML = `${playerWinCount}`;
    if(pcScore)
    pcScore.innerHTML = `${pcWinCount}`;
};

start();

function closeRules(){
    const rules = document.querySelector('#rules');
    rules.style.display = 'none';
}

function openRules(){
    const rules = document.querySelector('#rules');
    rules.style.display = 'block';
}

function playerWon (value1, value2) {
    if(value1 === 'rock'){
        if(value2 === 'scissors'){
            return true;
        }
        else{
            return false;
        }
    }
    else if(value1 === 'scissors'){
        if(value2 === 'paper'){
            return true;
        }
        else{
            return false;
        }
    }
    else if(value1 === 'paper'){
        if(value2 === 'rock'){
            return true;
        }
        else{
            return false;
        }
    }
}

function winner (value, pc){
    const agpc = document.querySelector('#agpc');
    const resultStatus = document.querySelector('#result_status');
    const youwin = document.querySelector('#you_win');
    const pcwin = document.querySelector('#pc_win');
    const playerScore = document.querySelector('#player_score');
    const pcScore = document.querySelector('#pc_score');
    const header = document.querySelector('#header');
    const win = document.querySelector('#win');
    const result = document.querySelector('#result');
    const next = document.querySelector('#next');
    const playerWinCountt = localStorage.getItem("player");
    const pcWinCountt = localStorage.getItem("pc");
    var playerRes = false;
    if(value === pc){
        agpc.style.display = 'none';
        resultStatus.innerHTML = "TIE UP";
        pcwin.style.display = 'none';
        youwin.style.display = 'none';
    }
    else{
        playerRes = playerWon(value, pc);
        if(playerRes){
            playerWonBool = true;
            youwin.style.display = 'flex';
            pcwin.style.display = 'none';
            const newCount = Number(playerWinCountt)+1;
            localStorage.setItem("player", `${newCount}`);
            playerScore.innerHTML = `${newCount}`;
            if(playerWonBool){
                win.style.display = 'flex';
                header.style.display = 'none';
                result.style.display = 'none';
                next.style.display = 'none';
            } else{
                resultStatus.innerHTML = "YOU WON";
            }
        }
        else{
            resultStatus.innerHTML = "YOU LOST";
            pcwin.style.display = 'flex';
            youwin.style.display = 'none';
            const newCount = Number(pcWinCountt)+1;
            localStorage.setItem("pc", `${newCount}`);
            pcScore.innerHTML = `${newCount}`
        }
    }
}

function winnerReset (){
    const agpc = document.querySelector('#agpc');
    const youwin = document.querySelector('#you_win');
    const pcwin = document.querySelector('#pc_win');
    agpc.style.display = 'block';
    youwin.style.display = 'none';
    pcwin.style.display = 'none';
    youwin.classList.remove = 'hidden';
    pcwin.classList.remove = 'hidden';
}

function selection(value){
    const result = document.querySelector('#result');
    const selection = document.querySelector('#selection');
    const next = document.querySelector('#next');
    const yourscont = document.querySelector('#yours');
    const pcscont = document.querySelector('#pcs');
    const yours = document.querySelector('#yours img');
    const pcs = document.querySelector('#pcs img');
    result.style.display = 'flex';
    next.style.display = 'block';
    selection.style.display = 'none';
    const randomElement = options[Math.floor(Math.random() * options.length)];
    yours.setAttribute('src', `./assest/${value}.jpg`);
    pcs.setAttribute('src', `./assest/${randomElement}.jpg`);
    yourscont.classList.add(`${value}`);
    pcscont.classList.add(`${randomElement}`);
    winner(value, randomElement);
}

function reset(){
    const result = document.querySelector('#result');
    const selection = document.querySelector('#selection');
    const next = document.querySelector('#next');
    const yourscont = document.querySelector('#yours');
    const pcscont = document.querySelector('#pcs');
    result.style.display = 'none';
    next.style.display = 'none';
    selection.style.display = 'flex';
    yourscont.classList.remove('rock', 'scissors', 'paper');
    pcscont.classList.remove('rock', 'scissors', 'paper');
    winnerReset();
}

function resetbtn(){
    playerWonBool = false; 
    const header = document.querySelector('#header');
    const result = document.querySelector('#result');
    const win = document.querySelector('#win');
    const next = document.querySelector('#next');
    header.style.display = 'flex';
    result.style.display = 'flex';
    next.style.display = 'flex';
    win.style.display = 'none';
}