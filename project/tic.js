let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".restart");  // Corrected selector
let msg = document.querySelector(".msg");
let msgco = document.querySelector(".msg-con");  // Corrected class name
let turn0 = true;
let count = 0;

const winnPat = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "o";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const checkWin = () => {
    for (let pattern of winnPat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== " " && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations ${winner}!`;
    msgco.classList.remove("hide");
    disableBox();
};

const resetGame = () => {
    turn0 = true;
    enableBox();
    msgco.classList.add("hide");
};

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
