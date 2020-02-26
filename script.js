let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");
let Question = document.getElementById("question");

let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){
    Question.innerText = questionText;
    btn1.innerText = choice1;
    btn2.innerText = choice2;
    btn3.innerText = choice3;
    btn4.innerText = choice4;
    correctOne = correctChoice;
};

let DoTheStuff = function(){

    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};
    btn4.onclick = function(){checkCorrect(this)};

    if(count === 0){
        createQuestion("What is my name?" , "Jack", "Nathan", "Ethan", "John", "Ethan" );
        correctOne = btn3;
    }else if(count === 1){
        createQuestion("What is my favorite animal?", "Raccoon", "Sloth", "Koala", "Red Panda", "Raccoon");
        correctOne = btn1;
    }else if(count === 2){
        createQuestion("What is my favorite color?", "Blue", "Yellow", "Red", "Purple", "Purple");
        correctOne = btn4;
    }else if(count === 3){
        createQuestion("What is my favorite subject?", "Math", "Language Arts", "Computer Science (You should pick this)", "Astronomy", "Computer Science (You should pick this)");
        correctOne = btn3;
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }

    document.getElementById("progress").innerText = "Question " + count + " of " + numQuestions;

};

let checkCorrect = function(button){
    if(button === correctOne){
        numRight++;
    }
    count++;
    DoTheStuff();
};
//function(questionText, choice1, choice2, choice3, choice4, correctChoice){ *your code goes here* }