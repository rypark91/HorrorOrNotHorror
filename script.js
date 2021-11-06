let quizData = [{
    picture: "freddy.jpg",
    nameOfEnemy: "Freddy Fazbear",
    gameName: "Five Nights at Freddy's",
    isHorror: true
},
{
    picture: "necromorph.jpg",
    nameOfEnemy: "Necromorph",
    gameName: "Dead Space",
    isHorror: true
},
{
    picture: "witch.jpg",
    nameOfEnemy: "The Witch",
    gameName: "Left 4 Dead",
    isHorror: true
},
{
    picture: "pyramid.jpg",
    nameOfEnemy: "Pyramid Head",
    gameName: "Silent Hill",
    isHorror: true
},
{
    picture: "volatile.jpg",
    nameOfEnemy: "Volatile",
    gameName: "Dying Light",
    isHorror: true
},
{
    picture: "bendy.png",
    nameOfEnemy: "Bendy",
    gameName: "Bendy and the Ink Machine",
    isHorror: true
},
{
    picture: "flood.jpg",
    nameOfEnemy: "The Flood",
    gameName: "Halo",
    isHorror: false
},
{
    picture: "redead.jpg",
    nameOfEnemy: "Redead",
    gameName: "The Legend of Zelda: Ocarina of Time",
    isHorror: false
},
{
    picture: "deadhand.jpg",
    nameOfEnemy: "Dead Hand",
    gameName: "The Legend of Zelda: Ocarina of Time",
    isHorror: false
},
{
    picture: "queenvanessa.png",
    nameOfEnemy: "Queen Vanessa",
    gameName: "A Hat in Time",
    isHorror: false
},
{
    picture: "mimic.jpg",
    nameOfEnemy: "Mimics",
    gameName: "Dark Souls",
    isHorror: false
},
{
    picture: "emmi.jpg",
    nameOfEnemy: "E.M.M.I",
    gameName: "Metroid Dread",
    isHorror: false
},
{
    picture: "giygas.png",
    nameOfEnemy: "Giygas",
    gameName: "Earthbound",
    isHorror: false
},
{
    picture: "flowey.jpg",
    nameOfEnemy: "Omega Flowey",
    gameName: "Undertale",
    isHorror: false
},
{
    picture: "02.png",
    nameOfEnemy: "02",
    gameName: "Kirby 64: The Crystal Shards",
    isHorror: false
},
{
    picture: "layra.jpg",
    nameOfEnemy: "Layra Creature",
    gameName: "The Evil Within",
    isHorror: true
},
{
    picture: "shodan.jpg",
    nameOfEnemy: "Shodan",
    gameName: "System Shock 2",
    isHorror: true
},
{
    picture: "nemesis.jpg",
    nameOfEnemy: "Nemesis",
    gameName: "Resident Evil",
    isHorror: true
}
    ];



var quizCopy;
var quiz;
var score;
var firstTry;
var i;
var quizLength = 10;


let questionBox = document.getElementById("question");
let intro = document.getElementById("intro");
let quizContainer = document.getElementById("quizContainer");
let choices = document.getElementById("choices");
let horrorButton = document.getElementById("horror");
let notHorrorButton = document.getElementById("notHorror");
let nextButton = document.getElementById("next");
let restart = document.getElementById("restart");
let image = document.getElementById("enemyImage");
let gameName = document.getElementById("gameName");
let skip = document.getElementById("skip");
let copyright = document.getElementById("copyright");


horrorButton.addEventListener('click',function(){
    checkGuess(true, quiz[i].isHorror);
});
notHorrorButton.addEventListener('click',function(){
    checkGuess(false, quiz[i].isHorror);
});
nextButton.addEventListener('click',function(){
    nextQuestion();
});
restart.addEventListener('click',function(){
    //restarts the game
    choices.appendChild(horrorButton);
    choices.appendChild(notHorrorButton);
    choices.appendChild(nextButton);
    buildGame();
});
skip.addEventListener('click', function(){
    //displays the main game menu
    intro.style.display = "none";
    quizContainer.style.display = "block";
    copyright.style.display = "block";
});

function buildGame(){
    score = 0;
    
    quizCopy = [];//quiz copy to get data from
    quiz = [];//actual quiz
    
    //sets up the game
    choices.removeChild(nextButton);
    choices.removeChild(restart);
    gameName.innerText = '';
    for(var j  = 0; j < quizData.length; j++){
        quizCopy.push(quizData[j]);
    }
    shuffleQuizOrder(quizCopy, quiz);
    i = 0;
    image.src = "images/" + quiz[i].picture;
    questionBox.innerText = "Question " + (i + 1) + " of " + quizLength + ": "
    + quiz[i].nameOfEnemy;
    
    
    
}
function shuffleQuizOrder(arr1, arr2){
    //shuffles the quiz order
    while(arr2.length !== 10){
        var num = Math.floor(Math.random() * arr1.length);
        arr2.push(arr1[num]);
        arr1.splice(num, 1);
    }
}

function nextQuestion(){
    i++;
    gameName.innerText = '';//clears the game name
    if(i === quizLength){
        //sets up for potential game restart
        choices.removeChild(nextButton);
        choices.append(restart);
        if(score == quizLength){
            gameName.innerText = "Quiz Completed.  Nice Work!  " + score + " out of " + quiz.length + "!  A perfect Score!";
        }
        else{
            gameName.innerText = "Quiz Completed.  You got " + score + " out of " + quiz.length + ".  You can improve.";
        }
    }
    else{
        //resets button and
        choices.removeChild(nextButton);
        choices.appendChild(horrorButton);
        choices.appendChild(notHorrorButton);
        image.src = "images/" + quiz[i].picture;
        questionBox.innerText = "Question " + (i + 1) + " of " + quizLength + ": "
        + quiz[i].nameOfEnemy;
        
        
    }
}
function checkGuess(guess, answer){
    if(guess === answer){
        gameName.innerText = 'Correct!  Good Job!  Game Origin: ' + quiz[i].gameName;
        score++;
    }
    else {
        gameName.innerText = 'Incorrect.  Game Origin: ' + quiz[i].gameName;
    
    }

    //sets up for the next question
    choices.removeChild(horrorButton);
    choices.removeChild(notHorrorButton);
    choices.appendChild(nextButton);


}


function init(){
    
    intro.style.display = "block";
    quizContainer.style.display = "none";

    //fixes a minor spacing issue;
    choices.removeChild(horrorButton);
    choices.removeChild(notHorrorButton);

    choices.appendChild(horrorButton);
    choices.appendChild(notHorrorButton);
    
    buildGame();
}

init();
