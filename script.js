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

var timeLeft = document.getElementById("quizTimer")

var score = 0;
//array of questions as objects
var questionsList = [
    {
        question: "Who is the oldest member",
        choice1: "1. Jin",
        choice2: "2. Jungkook",
        choice3: "3. Suga",
        choice4: "4. RM",
        correctAns: "1"
    },{
        question: "this is a question",
        choice1: "no",
        choice2: "yes",
        choice3: "no",
        choice4: "no",
        correctAns: "2"
    },{
        question: "this is a question",
        choice1: "no",
        choice2: "no",
        choice3: "yes",
        choice4: "no",
        correctAns: "3"
    },{
        question: "this is a question",
        choice1: "no",
        choice2: "no",
        choice3: "no",
        choice4: "yes",
        correctAns: "4"
    }
];
// hides the first screen , unhides the quiz, and starts the questions
function startQuiz(){
    starButtonEl.classList.add("hide")
    quizEl.classList.remove("hide")
    description.classList.add("hide")
    quizTitle.classList.add("hide")
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
        score++;
        correctAnswer();
    } else{
        score--;
        wrongAnswer();
    }
    if (currentQuestionNum < endQuiz){
        currentQuestionNum++;
        nextQuestion();
    } else {
        finishQuizScreen.classList.remove("hide")
        finalScore.textContent = score;

    }

}


function wrongAnswer(){
    console.log("incorrect")
    console.log(score)
}
function correctAnswer(){
    console.log("correct")
}


starButtonEl.addEventListener("click",startQuiz)