let msghidden = document.querySelector(".msg-hidden-container");
let box = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn")

let turn = true;
let count = 0;
box.forEach((b) => {
    b.addEventListener("click", () => {
        count++;
        if(turn){
            b.innerHTML = "X";
            turn = false;
        }else{
            b.innerText = "O";
            turn = true;
        }
        b.disabled = true;

        let winner = checkWinner();
        
        if(count == 9 && !winner){
            gamedraw();
        }
    });
});

const pos =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const checkWinner = () => {
    for(let p of pos){
        let pos1 = box[p[0]].innerText;
        let pos2 = box[p[1]].innerText;
        let pos3 = box[p[2]].innerText;

        if(pos1 != "" && pos1 != "" && pos1 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};

const showWinner = (player) => {
    document.querySelector("#msg").innerText = `Winner is ${player}`;
    msghidden.classList.remove("hide");
    disableboxes();
};

const gamedraw = () => {
    document.querySelector("#msg").innerText = "Game Draw";
    msghidden.classList.remove("hide");
    disableboxes();
}

const reset = () =>{
    turn = true;
    count = 0;
    enableboxes();
    msghidden.classList.add("hide");
    
}

const enableboxes = () => {
    for(let b of box){ 
        b.disabled = false;
        b.innerText = "";
    }
}

const disableboxes = () => {
    for(let b of box) b.disabled = true;
}

newBtn.addEventListener("click" , reset);
resetBtn.addEventListener("click", reset);