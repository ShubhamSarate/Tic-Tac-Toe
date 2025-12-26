let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let winBox = document.querySelector(".winBox");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const reStart = ()=>{
    turnO = true;
    startClick();
    winBox.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Clicked");
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const stopClick = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const startClick = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const winner = (win)=>{
    msg.innerText = `Congratulations Winner is ${win}`;
    winBox.classList.remove("hide");
    stopClick();
}

const checkWin = () => {
        for(let pattern of winPatterns){
            let pos0 = boxes[pattern[0]].innerText;
            let pos1 = boxes[pattern[1]].innerText;
            let pos2 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos0 != ""){
            if(pos0 === pos1 && pos1 === pos2){
                console.log("Winner",pos2)
                winner(pos2);
            }
        }
        }
    }
newGame.addEventListener("click",reStart);
reset.addEventListener("click",reStart);

