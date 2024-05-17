
//Constatnt global variable declaration
const startButton = document.querySelector(".start_btn button");
const ruleBox = document.querySelector(".info_box");
const exitButton = ruleBox.querySelector(".buttons .quit");
const continueButton = ruleBox.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeCountdownMin = document.querySelector(".timer2 .timer_sec_min");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Global variable declaration
let timeValue =  60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let answeredQue = false;


startButton.onclick = ()=>{//If start button clicked 
    ruleBox.classList.add("activeInfo");//show rules 
    playAudio();//play the song
}


exitButton.onclick = ()=>{//If exit button clicked 
    ruleBox.classList.remove("activeInfo"); //hide rules
}


continueButton.onclick = ()=>{//If continue button clicked
    ruleBox.classList.remove("activeInfo"); //hide rules
    quiz_box.classList.add("activeQuiz"); //show quiz
    showQuetions(0); 
    queCounter(1); 
    startTimer(60); 
    startTimerLine(0); 
}


restart_quiz.onclick = ()=>{//If Replay button clicked
    quiz_box.classList.add("activeQuiz"); //show quiz
    result_box.classList.remove("activeResult"); //Hide result
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); //hide next button
}


quit_quiz.onclick = ()=>{//If Quit button clicked
    window.location.reload(); //reload the page
}




next_btn.onclick = ()=>{
    if((que_count < questions.length - 1) && (timeValue > 0)){ 
        que_count++; 
        que_numb++; 
        answeredQue = false;
        showQuetions(que_count); 
        queCounter(que_numb); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else if((que_count < questions.length - 1) && (timeValue < 0)){  
        showResult(); 
    }else if((que_count = questions.length -1)){
        showResult(); 
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

  
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");


    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    answeredQue = true;
    
    if(userAns == correcAns){ 
        userScore += 10; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    ruleBox.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 90){ 
        let scoreTag = '<span>and <p id= "resultColorOrange">congrats!</p><p> 🎉, You got '+ userScore +' out of 100 </p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore >= 50){ 
        let scoreTag = '<span>and <p id= "resultColorGreen">nice</p><p> 😎, You got '+ userScore +' out of 100 </p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and <p  id= "resultColorRed">sorry</p><p> 😐, You got only '+ userScore +' out of 100 </p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--;
        timeValue--;
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            clearInterval(counterLine);
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            
            if(answeredQue == false){
                for(i=0; i < allOptions; i++){
                    if(option_list.children[i].textContent == correcAns){ 
                        option_list.children[i].setAttribute("class", "option correct");
                        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                        console.log("Time Off: Auto selected correct answer.");
                    }
                }
            }            
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show");

        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer,110 );
    function timer(){
        time += 1; 
        time_line.style.width = time + "px";
        if(time > 549){ 
            clearInterval(counterLine);
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +' of '+ questions.length +' Questions </p> </span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}

var x = document.getElementById("lpAudio");

function playAudio(){
    x.play();
}