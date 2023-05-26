var answers = ["Yes", "No", "Maybe" , "Ask Again", "Ask Your Parents"]

function shakeBall(){
    let shake = document.querySelector(".ball");
    shake.classList.add("shake");

    const stopBall = setTimeout(() => {
        shake.classList.remove("shake");
    }
    , "3000" );
}

function getAnswer() {
    //shake the ball 3 seconds
    shakeBall();

    //choose an answer from answers.array
    setTimeout(() => {
    let i = Math.floor(Math.random() * 5);
    document.querySelector(".ballNR")
    let ballNR = document.querySelector(".ballNR");
    ballNR.innerHTML = answers[i];
    ballNR.style.fontSize = "1rem";
    ballNR.classList.add("triangle");
    console.log(i);

    let r = document.querySelector(":root");
    
    if (i < 3){
        r.style.setProperty('--answerColor', 'white');
        r.style.setProperty('--fontSize', '1rem');
    }else{
        r.style.setProperty('--answerColor', 'black');
        r.style.setProperty('--fontSize', '0.7rem');  
    }
},3000);
    
}

