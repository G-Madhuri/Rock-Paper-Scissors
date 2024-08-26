let userScore=0;
let compScore=0;
const choices= document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
let userImg = document.querySelector('#userImg');
let compImg = document.querySelector('#compImg');
let users = document.querySelector('#user-score');
let comps = document.querySelector('#comp-score');
let c=document.querySelector('.dubuk');
let d=document.querySelector('.dudum');

const genCompChoice=()=>{
    const options = ['rock','paper','scissors']
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=(userChoice,compChoice)=>{
    compScore++;userScore++;
    msg.innerText="Draw game!";
    msg.style.backgroundColor = 'orange';
    for(let i of c.classList){
        if(i==='hide'){c.classList.remove('hide');}}
    for(let i of d.classList){
        if(i==='hide'){d.classList.remove('hide');}}
    userImg.src=`./images/${userChoice}.png`;
    compImg.src=`./images/${compChoice}.png`;
    users.innerText=userScore;
    comps.innerText=compScore;
    
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText="Congratulations! You win";
        msg.style.backgroundColor = 'green';
        for(let i of c.classList){
            if(i==='hide'){c.classList.remove('hide');}}
        for(let i of d.classList){
            if(i==='hide'){d.classList.remove('hide');}}
        userImg.src=`./images/${userChoice}.png`;
        compImg.src=`./images/${compChoice}.png`;
        users.innerText=userScore;
        comps.innerText=compScore;
    }
    else{
        compScore++;
        msg.innerText="Oops you lose!Computer wins..";
        msg.style.backgroundColor = 'red';
        for(let i of c.classList){
            if(i==='hide'){c.classList.remove('hide');}}
        for(let i of d.classList){
            if(i==='hide'){d.classList.remove('hide');}}
        userImg.src=`./images/${userChoice}.png`;
        compImg.src=`./images/${compChoice}.png`;
        users.innerText=userScore;
        comps.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice===compChoice){drawGame(userChoice,compChoice);}
    else{let userWin=true;
        if(userChoice=='rock'){
            userWin=compChoice==='paper' ? false : true;
        }
        else if(userChoice==='paper'){
            userWin=compChoice==='scissors' ? false : true;
        }
        else{userWin=compChoice==='rock' ? false : true;}
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})