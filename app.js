var QuesObj = [
    {
        question:"What is the chemical symbol for gold?",
        Options: [
            "A) Ag",
            "B) Go",
            "C) Au",
            "D) Go"
        ],
        Answer:"C) Au"
    },
    {
        question:"Who was the first President of the United States?",
        Options: [
            "A) Benjamin Franklin",
            "B) Thomas Jefferson",
            "C) George Washington",
            "D) John Adams"
        ],
        Answer:"C) George Washington"
    },
    {
        question:"Which river is the longest in the world?",
        Options:[
            "A) Nile",
            "B) Amazon ",
            "C) Mississippi",
            "D) Yangtze"
        ],
        Answer:"A) Nile"
    },
    {
        question:"Who wrote the play 'Romeo and Juliet'?",
        Options:[
            "A) Charles Dickens",
            "B) William Shakespeare",
            "C) Jane Austen",
            "D) Mark Twain"   
        ],
        Answer:"B) William Shakespeare"
    },
    {
        question:"What is the value of π (pi) to two decimal places?",
        Options:[
            "A) 3.14",
            "B) 3.16",
            "C) 3.18",
            "D) 3.20"
        ],
        Answer:"A) 3.14"
    }
]

var score = document.getElementById("score");
var timer = document.getElementById("timer");
var curQ = document.getElementById("currentQ");
var questions = document.getElementById("question");
var optionsDiv = document.getElementById("options");
var nextButton = document.getElementById("next");

var indexQ = 0;
var scoreV = 0;
var countdownInterval;

function render(){
    if(indexQ < QuesObj.length){
        questions.innerHTML = QuesObj[indexQ].question;
        curQ.innerHTML = `CURRENT QUESTION: ${indexQ + 1}/${QuesObj.length}`;
        score.innerHTML =`SCORE : ${scoreV}`
        nextButton.innerHTML = 'NEXT';
        nextButton.className = "btn btn-info"
        optionsDiv.innerHTML = ''; // Clear previous options
        for(var i = 0; i < QuesObj[indexQ].Options.length; i++){
            optionsDiv.innerHTML += `<input type="radio" value="op" name="asd" 
            class ="fs-2"
             onclick="correctAns('${QuesObj[indexQ].Options[i]}','${QuesObj[indexQ].Answer}')">
             ${QuesObj[indexQ].Options[i]}<br>`;
        }
    }else{
     endOfQuiz()
    }
}
render();

function endOfQuiz(){
    questions.innerHTML = "QUIZ COMPLETED";
    var percentage = (score / (QuesObj.length * 5)) * 100;
    curQ.textContent = `Your percentage is ${percentage}%`;
    optionsDiv.innerHTML = "";
    score.textContent = score;

    var restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    optionsDiv.appendChild(restartButton);
    restartButton.className ='btn btn-outline-dark' ;
    nextButton.style.display = "none";
    timer.style.display = "none";
    clearInterval(countdownInterval); 
}

function next(){
    indexQ++;
    render();
    startCountdown(5, "timer")
}


function correctAns(selectedOption, correctAnswer) {
    if(selectedOption === correctAnswer){
        scoreV = scoreV+5
    }else{
        console.log("WRONG")
    }
    console.log("score =======>",scoreV)
}



function startCountdown(durationInMinutes, displayElementId) {
    let timeLeft = durationInMinutes * 60; // Convert minutes to seconds
    const timer = document.getElementById(displayElementId);

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        }

        timeLeft--;
    }
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    countdownInterval = setInterval(updateTimer, 1000);
}
startCountdown(5, "timer");
