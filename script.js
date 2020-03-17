// all variables
var starButtonEl = document.getElementById("startButton")
var quizEl = document.getElementById("quiz")
var questionEl = document.getElementById("question")
var choice1 = document.getElementById("1")
var choice2 = document.getElementById("2")
var choice3 = document.getElementById("3")
var choice4 = document.getElementById("4")
var quizTitle = document.getElementById("titleCard")
var description = document.getElementById("gameDescription")
var finishQuizScreen = document.getElementById("endScreen")
var finalScore = document.getElementById("totalScore")
var userSubmit = document.getElementById("submitScore")
var userName = document.getElementById("name")
var highscorePage = document.getElementById("highscoreScreen")

var timeLeft = document.getElementById("quizTimer")
var secondsLeft = 40;

var score = 0;
//array of questions as objects
var questionsList = [
    {
        question: "Who is the oldest member?",
        choice1: "1. Jin",
        choice2: "2. Jungkook",
        choice3: "3. Suga",
        choice4: "4. RM",
        correctAns: "1"
    },{
        question: "When did BTS debut?",
        choice1: "2015",
        choice2: "2013",
        choice3: "2018",
        choice4: "2009",
        correctAns: "2"
    },{
        question: "Who is the youngest member?",
        choice1: "Jimin",
        choice2: "Hoseok",
        choice3: "Jungkook",
        choice4: "Taehyung",
        correctAns: "3"
    },{
        question: "What entertainment company owns BTS?",
        choice1: "YG ent.",
        choice2: "Starship ent.",
        choice3: "Jellyfish ent.",
        choice4: "BigHit ent.",
        correctAns: "4"
    }
];
// hides the first screen , unhides the quiz, and starts the questions
function startQuiz(){
    starButtonEl.classList.add("hide")
    quizEl.classList.remove("hide")
    description.classList.add("hide")
    quizTitle.classList.add("hide")
    quizTime()
    nextQuestion()
}
// set the first question index to 0 (outside so that functions can add on and not reset)
var currentQuestionNum = 0;
// the length of the quiz is the same as the length of the array -1 (can't do '<')
var endQuiz = questionsList.length - 1;
// function that shows the current questions and choices
function nextQuestion(){
    // set a variable to the current question in the array
    var currentQ = questionsList[currentQuestionNum];
    // the displayed question is the current array numbers question object
    question.innerHTML = currentQ.question;
    // the choices are the current array numbers choices obejct
    choice1.innerHTML = currentQ.choice1;
    choice2.innerHTML = currentQ.choice2;
    choice3.innerHTML = currentQ.choice3;
    choice4.innerHTML = currentQ.choice4;
}
//function to check if the choice was correct
function checkCorrect(buttonPressed){
    if (buttonPressed === questionsList[currentQuestionNum].correctAns){
        correctAnswer();
    } else{
        wrongAnswer();
    }
    if (currentQuestionNum < endQuiz){
        currentQuestionNum++;
        nextQuestion();
    } else {
        finishQuizScreen.classList.remove("hide")
        quizEl.classList.add("hide")
        finalScore.textContent = score;
    }

}

//subtract from score
function wrongAnswer(){
    score--;
    secondsLeft = secondsLeft - 10;
}
//add to score
function correctAnswer(){
    score++;
}
function quizTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--
        timeLeft.textContent = "time: " + secondsLeft;

        
        if(secondsLeft <= 0){
            clearInterval(timerInterval);
            secondsLeft = 0;
            finishQuizScreen.classList.remove("hide")
            quizEl.classList.add("hide")
            finalScore.textContent = score;
        }
        
    }, 1000)
}
userSubmit.addEventListener("click", function(event){
    event.preventDefault();

    var user = {
        name: userName.value.trim(),
        score: score
    }

    console.log(score)
    if (userName === ""){
        displayMessage("please enter a name")
    }
    localStorage.setItem("user",JSON.stringify(user))

    finishQuizScreen.classList.add("hide")
    highscorePage.classList.remove("hide")
})

starButtonEl.addEventListener("click",startQuiz)