let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winMessage = document.querySelector(".message-container");
let message = document.querySelector("#message");
let newGame = document.querySelector(".newbtn");
let messageSecond = document.querySelector(".message-containerSecond");
let newGameSecond = document.querySelector(".newbtnSecond");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
btn.forEach((button) => {
  button.addEventListener("click", () =>{
    if(turn0){
        button.innerText = "O";
        turn0 =false
    }else{
        button.innerText= "X";
        turn0=true
    }
    button.disabled = true;
    checkwinner();

  })  
})

const displayWinner = (winner) =>{
   message.innerText = `Conngrats, Winner is ${winner}`;
   winMessage.classList.remove("hide");
   disableBtns()
}

const disableBtns = () =>{
    for (let btns of btn){
        btns.disabled=true;
    }
}

const enableBtns = () =>{
    for (let btns of btn){
        btns.disabled=false;
        btns.innerText = "";
    }
}

const checkwinner = () =>{
    let winnerFound = false;
  for (let pattern of winPatterns){
    let pos1Val = btn[pattern[0]].innerText;
    let pos2Val = btn[pattern[1]].innerText;
    let pos3Val = btn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){

        if (pos1Val == pos2Val && pos2Val == pos3Val){
            displayWinner(pos1Val)
            winnerFound = true;
            break;
        }
    }
  }
  if(!winnerFound){
    tied();
  }
}

newGame.addEventListener("click" , ()=>{
   enableBtns()
   winMessage.classList.add("hide");
})
resetBtn.addEventListener("click", ()=>{
   enableBtns()
})

const tied = () => {
    for (let box of btn) {
        if (box.innerText === "") {
            return; 
        }
    }
    disableBtns();
    tryAgain(); 
};

const tryAgain = () => {
    messageSecond.classList.remove("hide");
};

newGameSecond.addEventListener("click",() =>{
    enableBtns();
    messageSecond.classList.add("hide");
})