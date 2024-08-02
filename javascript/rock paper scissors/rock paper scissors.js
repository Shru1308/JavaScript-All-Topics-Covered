let userScore = 0;
let compScore = 0;

let options = document.querySelectorAll(".choice");
options.forEach((option) => {
    option.addEventListener("click", () => {
        let userOption = option.getAttribute("id");
        
        playgame(userOption);
    });
})

let playgame = (userVal) => {    
    let values = ["rock", "paper", "scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    let compOption = values[randomVal];

    checkWinner(userVal, compOption);
};

let msg = document.querySelector("#msg");

let checkWinner = (userVal, compVal) => {
    if(userVal == compVal){
        msg.innerText = "It was a DRAW!";
        msg.style.backgroundColor = "rgb(221, 245, 62)";
    }
    else{
        let userWin = true;
        if(userVal == "rock"){
            userWin = (compVal == "paper") ? false : true;
        }else if(userVal == "paper"){
            userWin = (compVal == "scissors") ? false : true;
        }else{
            userWin = (compVal == "rock") ? false : true;
        }

        if(userWin){ 
            userScore++;
            diplaysUserscore(userScore, userVal, compVal);
        }
        else{ 
            compScore++;
            diplaysCompscore(compScore,userVal, compVal);
        }
    }

};

let uscore = document.querySelector("#score-user");
let diplaysUserscore = (us, uv, cv) => {
    msg.style.backgroundColor = "rgb(0, 241, 76)";
    uscore.innerText = us;
    msg.innerText = `You Won. ${uv} beats ${cv}`;
};

let cscore = document.querySelector("#score-comp");
let diplaysCompscore = (cs, uv, cv) => {
    msg.style.backgroundColor = "rgb(240, 2, 2)";
    cscore.innerText = cs;
    msg.innerText = `You Lost. ${cv} beats ${uv}`;
};