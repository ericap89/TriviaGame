const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
let questions = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
var timer = document.getElementById("timer");

// start quiz 
start.addEventListener("click", startQuiz)
//  timer
var timer = 30;
    var elem = document.getElementById("timer");

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if(timeLeft == 0) {
            clearTimeout(timerId);
            renderQuestion;
        }else{
        elem.innerHTML = timeLeft + 'seconds remaining';
        timeLeft -- ;
        }
// questions 
let question = [
    {
    question : "How many NBA champsionships do the laker have?",
    choiceA : "5",
    choiceB : "16",
    choiceC : "8",
    choiceD : "18",
    correct : "B"
},
{   question : "Which player spent his entire career with the lakers?",
    choiceA : "Lebron",
    choiceB : "Kareem",
    choiceC : "Kobe",
    choiceD : "Fisher",
    correct : "C"
},
{
    question : "Who is the current point guard for the Lakers?",
    choiceA : "Steph Curry",
    choiceB : "Derek Fisher",
    choiceC : "Lonzo Ball",
    choiceD : "Lebron James",
    correct : "C"
}
];
// Render Questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0 ;

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceA.innerHTML = q.choiceB;
    choiceA.innerHTML = q.choiceC;
    choiceA.innerHTML = q.choiceD;
}

// check answers 

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score ++;

    } else {
        
    }
}