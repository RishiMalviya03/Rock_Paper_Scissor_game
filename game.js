let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");
const genecompChoice = () =>{
    //rock paper scissor
    const option = ["Rock" ,"Paper","Scissor"];
    const randomIdx = Math.floor(Math.random() *3);
    return option[randomIdx];
}
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was draw Play again!";
    msg.style.backgroundColor = "orange";
}
const showWinner = (userwin ,userChoice,computerChoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! Your ${userChoice} beat ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        msg.innerText = `you lose ${computerChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userChoice) => {
    //generate computer choice
    const computerChoice = genecompChoice();
    if(userChoice === computerChoice){
        drawGame();
    }else {
        let userwin = true;
        if(userChoice === "Rock"){
            userwin = computerChoice === "Paper" ? flase :true;
        }else if(userChoice === "Paper"){
            userwin = computerChoice === "Scissor" ?false : true;
        }
        else{
            userwin = computerChoice === "Rock" ? false :true;
        }
        showWinner(userwin,userChoice,computerChoice);
    }
};
choices.forEach((choice) =>{
    console.log(choice);
    choice .addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
