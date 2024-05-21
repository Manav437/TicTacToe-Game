let boxes = document.querySelectorAll(".gameBox");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".winner-msg");
let msg = document.querySelector(".winner");

let turnO= true;

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // box.innerText="hello";
        if(turnO == true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkIfWin();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (isWinner) => {
    msg.innerText = `Congrats, winner is ${isWinner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkIfWin = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                // console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);