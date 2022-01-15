const startbtn=document.getElementById("startbtn")
const startHeader=document.getElementById("startHeader")
const questionContainer=document.getElementById("questionContainer")

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
})




function startQuiz(){
questionContainer.style.display="block"
const title=document.createElement("h2")   
const button1 = document.createElement("button")  
const button2 = document.createElement("button")  
const button3 = document.createElement("button")  
const button4 = document.createElement("button")  


for (let i = 0; i < questions.length; i++) {




title.append(questions[i].question)
button1.append (questions[i].choice1)
button2.append (questions[i].choice2)
button3.append (questions[i].choice3)
button4.append (questions[i].choice4)


}
questionContainer.append(title, button1, button2, button3, button4)

}



//create a counter function interval time function eg set interval etc look in activities
// how to do css in js to make one page disapper and the other appear eg when you press start the questions appear
//it can only show when the button is clicked to start