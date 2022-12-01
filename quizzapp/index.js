const quizQuestion = [
    {
        question:"What is the capital of Ghana",
        a:"Accra",
        b:"Kumasi",
        c:"Kintampo",
        d:"Sunyani",
        correct:"a"
    },

    {
        question:"Full meaning of CSS",
        a:"Cross section style",
        b:"Const Section of Sections",
        c:"Cascading Style Sheet",
        d:"Cascadding style sheet",
        correct:"c"
    },

    {
        question:"The most use programming language",
        a:"Java",
        b:"JavaScript",
        c:"Python",
        d:"C++",
        correct:"b"
    },

    {
        question:"What's Michael's favourite language",
        a:"Java",
        b:"JavaScript",
        c:"Python",
        d:"C++",
        correct:"b"
    },

    {
        question:"Choose the odd one out",
        a:"Java",
        b:"JavaScript",
        c:"Python",
        d:"ReactJs",
        correct:"d"
    },

]
///Getting our Elements
const submit= document.querySelector(".submit")
const reLoad= document.querySelector(".re-load")
const answerEls = document.querySelectorAll("input")
const questionText = document.querySelector("h2")
const aText =document.querySelector(".a-text")
const bText =document.querySelector(".b-text")
const cText =document.querySelector(".c-text")
const dText =document.querySelector(".d-text")
const quizCont =document.querySelector(".quiz-questions")

let currentQuiz = 0
let score = 0

const loadQuiz = ()=> {
    deselect()
    let loadCurrentQuiz = quizQuestion[currentQuiz]
    questionText.innerText = loadCurrentQuiz.question
    aText.innerText = loadCurrentQuiz.a
    bText.innerText = loadCurrentQuiz.b
    cText.innerText = loadCurrentQuiz.c
    dText.innerText = loadCurrentQuiz.d
    
}
loadQuiz()

///deselect Answers
function deselect(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
///get selected answers
function getSelectedAnswer (){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
        
    })
    // console.log(answer)
    return answer
}

///Adding EventListners
submit.addEventListener('click', ()=>{
    let Answer = getSelectedAnswer()
    if(Answer){
        if(Answer===quizQuestion[currentQuiz].correct){
           submit.style.backgroundColor = "green"
           score++
        //    console.log(score)
        }else{
           submit.style.backgroundColor = "red"

        }
    
    currentQuiz++
    if(currentQuiz<quizQuestion.length){
        loadQuiz()
    }else
        quizCont.innerHTML=`<h2>You scored ${score}/${quizQuestion.length}</h2>
        
        <button onclick="location.reload()">Restart</button>`
        
} else{
    alert("All Questions must be answered!")
}   
    
}

)
