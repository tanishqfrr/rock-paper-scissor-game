let usercore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#usercore");
const comscorepara = document.querySelector("#comscore");

const gencomchoice = () => {
    const option = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}
const drawgame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw!!. Play Again->"
    msg.style.backgroundColor = "#081b31";
}
let userwin = true;
const showwinner = (userwin,userchoice,comchoice) => {
    if(userwin){
        usercore++;
        userscorepara.innerText = usercore;
        msg.innerText = `you win! your ${userchoice} beats ${comchoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        comscore++;
        comscorepara.innerText = comscore; 
        msg.innerText = `you lose! computer ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    // computer choice
    const comchoice = gencomchoice();
    console.log("com choice =",comchoice);

    if(userchoice === comchoice){
        drawgame();
    }
    else{
        if(userchoice === "rock"){
            userwin = comchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = comchoice === "scissor" ? false : true;
        }
        else{
            userwin = comchoice === "rock" ? false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener(("click"),() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})