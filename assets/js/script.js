const startbtn=document.getElementById("startbtn")
const startHeader=document.getElementById("startHeader")
const questionContainer=document.getElementById("questionContainer")
const questionEL=document.getElementById("question")
const btn1El=document.getElementById("answer1");
const btn2El=document.getElementById("answer2");
const btn3El=document.getElementById("answer3");
const btn4El=document.getElementById("answer4");
const container2=document.getElementById("container2");
const timercontainer=document.querySelector(".timer");
const timerseconds=document.getElementById("timer_seconds");
const answer=document.getElementById("ans-btn");
let currentQuestionIndex=0



// create an array of objects with questions and answers for material to work with

const questions = [{
    question:"What is Node?",
    choice1: " A belly button",
    choice2: " a C++ program",
    choice3: " a letter in the alphabet",
    choice4: " an element on the periodic table",
    correct: " a C++ program"

},

{
    question:"What is decrement?",
    choice1: " counting backwards",
    choice2: " a C++ program",
    choice3: " a letter in the alphabet",
    choice4: " an element on the periodic table",
    correct: " counting backwards"

},

{
    question: " Which answer is a Tag? ",
    choice1: " Footer",
    choice2: " Header",
    choice3: " Body",
    choice4: " All three",
    correct: " All three"

}

{
    question: " What is HTML short for? ",
    choice1: " Hypertext Markup Language",
    choice2: " High Tree Markup Language",
    choice3: " Huge Tree Markup Language",
    choice4: " AHigh Text Markup Language",
    correct: " Hypertext Markup Language"

}
]

startbtn.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("the button is clicking")
startHeader.style.display="none"
startQuiz()
startTimer()
})


function startQuiz(){
    if (currentQuestionIndex===questions.length){
     endQuiz()   
    }
questionContainer.classList.replace("hide","show")
questionEL.textContent=questions[currentQuestionIndex].question   
btn1El.textContent=questions[currentQuestionIndex].choice1; 
btn2El.textContent=questions[currentQuestionIndex].choice2;
btn3El.textContent=questions[currentQuestionIndex].choice3;
btn4El.textContent=questions[currentQuestionIndex].choice4;

//add the value attribute to buttons with the answers to Qs
btn1El.setAttribute("value", questions[currentQuestionIndex].choice1 )
btn2El.setAttribute("value", questions[currentQuestionIndex].choice2 )
btn3El.setAttribute("value", questions[currentQuestionIndex].choice3 )
btn4El.setAttribute("value", questions[currentQuestionIndex].choice4 )
}

let interval;
/* this sets the timer and -- starts a countdown*/

let time=100
function startTimer(){
timercontainer.classList.remove("hide")
    interval=setInterval(function() {
time--
timerseconds.innerHTML=time
}, 1000)
}

let score=0

function checkAnswer(userChoice){
if (userChoice===questions[currentQuestionIndex].correct){
    currentQuestionIndex++ 
    startQuiz()
    score++
} else {
    currentQuestionIndex++
    time=time -10
    startQuiz()
}

}
let finalScore

function endQuiz(){
    clearInterval(interval)
    questionContainer.style.display="none"
finalScore=finalScore
container2.classList.remove("hide")
}
//add event listener to target the button with the answers
answer.addEventListener("click",(event)=>{
    event.preventDefault()
    let btnclick = this.event.target.value
    console.log (btnclick)
    checkAnswer(btnclick)
})

/* Timer Section*/

/*var countDownTime = new Time (1).getTime();
var x = setInterval(function(){})
var now = new Date().getTime();
var distance = countDownTime - now;
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timed").innerHTML = days + "seconds + "s";

Time up section
const myTimeout = setTimeout (myGreeting, 5000);
function myGreeting() { document.getElementById("Timeup").innerHTML= "Your Time is Up!"
if(distance <0) {clearInterval(x);}*/


//create a counter function interval time function eg set interval etc look in activities
// how to do css in js to make one page disapper and the other appear eg when you press start the questions appear
//it can only show when the button is clicked to start