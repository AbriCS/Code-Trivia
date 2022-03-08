let scores=JSON.parse(localStorage.getItem("HighScores")) || []

function displayScore() {
    const table=document.getElementById("scores")
    for (let i = 0; i < scores.length; i++) {//run through an array
     const tr=document.createElement("tr") 
     const initTd= document.createElement("td") 
     const scoreTd= document.createElement("td")
     const thRow=document.createElement("th")
//set attribute
     thRow.setAttribute("scope", "row")
     //append
     initTd.append(scores[i].initials) 
     scoreTd.append(scores[i].score)
     tr.append(initTd,scoreTd)
     table.append(tr)
    }
}
displayScore()