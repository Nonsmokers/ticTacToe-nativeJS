let cell = document.querySelectorAll('.cell');
let btn = document.getElementById('reset');
let scoreX =document.getElementById('score1');
let scoreO = document.getElementById('score2');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.smodal');
let player = document.getElementById('player');

////////////////////check step
let step = 0;
function currentStep(event){
    console.log(step);
    if (event.target.innerHTML === ''){
        if(step %2 === 0){
            event.target.innerHTML = 'X';
            player.innerText ='O';
        }else{
            event.target.innerHTML = 'O';
            player.innerText ='X';
        }
        step++;
    }
    checkWin ();
}
///////////////////////Check winner
score1.innerHTML=+0;
score2.innerHTML=+0;
function checkWin () {
    let winComb = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
    let win = false;
    for (let i =0; i<winComb.length; i++) {
        if( cell[winComb[i][0]].innerHTML === 'X' &&
            cell[winComb[i][1]].innerHTML === 'X' &&
            cell[winComb[i][2]].innerHTML === 'X'){
                win = true;
                score1.innerHTML++;
                showModal();
                alert('выиграли кресты');
                reset();
                return;
            }else if(
            cell[winComb[i][0]].innerHTML === 'O' &&
            cell[winComb[i][1]].innerHTML === 'O' &&
            cell[winComb[i][2]].innerHTML === 'O'){
                win = true;
                score2.innerHTML++;
                showModal()
                alert('выиграли ноли');
                reset();
                return;
            }else if(step>8){
                showModal();
                alert('не выиграл никто')
                reset();
            }
    }
}

function reset(){
    for (let i = 0; i< cell.length; i++) {
        cell[i].innerText ='';
        step = 0;
}}

function newPart(){
    location.reload()
}

btn.addEventListener('click', newPart);

document.querySelector('table').addEventListener('click' , currentStep);
function closeModal(){
    overlay.style.display = 'none';
    reset();
}

function showModal(){
    overlay.style.display = 'flex';
    modal.style.display = 'block';
    modal.innerHTML.score1
}

okBtn.addEventListener('click', closeModal)