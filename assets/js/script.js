const startbtn=document.getElementById("startbtn")
const startHeader=document.getElementById("startHeader")
const questionContainer=document.getElementById("questionContainer")
const questionEL=document.getElementById("question")
const btn1El=document.getElementById("answer1");
const btn2El=document.getElementById("answer2");
const btn3El=document.getElementById("answer3");
const btn4El=document.getElementById("answer4");
const timercontainer=document.querySelector(".timer")
const timerseconds=document.getElementById("timer_seconds")

const currentQuestionIndex=0



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
    question: " which one is a Tag? ",
    choice1: " footer",
    choice2: " a C++ program",
    choice3: " a letter in the alphabet",
    choice4: " an element on the periodic table",
    correct: " footer"

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
questionContainer.style.display="block"
questionEL.textContent=questions[currentQuestionIndex].question   
btn1El.textContent=questions[currentQuestionIndex].choice1; 
btn2El.textContent=questions[currentQuestionIndex].choice2;
btn3El.textContent=questions[currentQuestionIndex].choice3;
btn4El.textContent=questions[currentQuestionIndex].choice4;
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