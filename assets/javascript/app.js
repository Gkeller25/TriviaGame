$(document).ready(function() {
var imageCorrect =[$('<img class="card-img-top"src="assets/images/bb8TUp.gif" id="correctImage" alt="Card image cap">'), $('<img class="card-img-top"src="assets/images/chewy.gif" id="correctImage" alt="Card image cap">'), $('<img class="card-img-top"src="assets/images/lando.gif" id="correctImage" alt="Card image cap">')];
var imageIncorrect =[$('<img class="card-img-top"src="assets/images/bb8shock.gif" id="incorrectImage" alt="Card image cap">'), $('<img class="card-img-top"src="assets/images/porg.gif" id="incorrectImage" alt="Card image cap">'), $('<img class="card-img-top"src="assets/images/IndyBB8.gif" id="incorrectImage" alt="Card image cap">'), $('<img class="card-img-top"src="assets/images/piet.gif" id="incorrectImage" alt="Card image cap">')];
var imageEnd = [$('<img class="card-img-top"src="assets/images/disneyStarwars.gif" id="endImage" alt="Card image cap">'), $('<img class="card-img-top"src="assets/images/DisneyVader.gif" id="endImage" alt="Card image cap">')];
var questions = [
    {question:"What planet is Han Solo from?", choices: [{c1:"Corellia", c2:"Carida", c3:"Corusant", c4:"Talus"}], answer:"Corellia"},
    {question:"What kind of racing was popular on the planet Tatooine?", choices:[{c1:"Dewback Racing", c2:"Bantha Racing", c3:"Speeder Racing", c4:"Podracing"}], answer:"Podracing"},
    {question:"What planet was the Rebel Alliance's Echo Base located on?", choices:[{c1:"Yavin4", c2:"Hoth", c3:"Sullust", c4:"Dantooine"}], answer:"Hoth"},
    {question:"What are the largest of the Empire's Star Destroyers called?", choices:[{c1:"Mega-class Star Destroyer", c2:"Super-class Star Destroyer", c3:"Resurgent-class Star Destroyer", c4:"Victory-class Star Destroyer"}], answer:"Super-class Star Destroyer"},
    {question:"On what planet was the Clone army created?", choices:[{c1:"Kamino", c2:"Utapau", c3:"Geonosis", c4:"Bestine"}], answer:"Kamino"},
    {question:"Which of the following is not a variants of Tie fighter?", choices:[{c1:"Tie Silencer", c2:"Tie Advanced", c3:"Tie Avenger", c4:"Tie Interceptor"}], answer:"Tie Avenger"},
    {question:"What was the first target of the Death Star", choices:[{c1:"Scarif", c2:"Alderaan", c3:"Eadu", c4:"Jedha"}], answer:"Jedha"},
    {question:"Which of the following is not a class of Rebel starfighters?", choices:[{c1:"X-wing", c2:"C-wing", c3:"B-wing", c4:"A-wing"}], answer:"C-wing"},
    {question:"Who was the template for the creation of Clone Troopers?", choices:[{c1:"Boba Fett", c2:"Sifo-Dyas", c3:"Qui-gon Jinn", c4:"Jango Fett"}], answer:"a"},
    {question:"On which planet did Han Solo get frozen in Carbonite?", choices:[{c1:"Bespin", c2:"Hoth", c3:"Tatooine", c4:"Dagobah"}], answer:"a"}

    ];
var questionsAvailable = questions.length;
var choiceSelected = false;
var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var number = 20;
var questionStatus = {};
var guess ={};

console.log(questions[0].choices[0]);
console.log(questions.length);
console.log(correct);
console.log(incorrect);

//button needs to begin the game
$("#begin").on("click", function(){
    $("#begin").hide();
    prepareScreen();
});


function prepareScreen(){
    $("#content").empty();
    setQuestion();
}

//creates question w/ its choices into the html
function setQuestion(){
   currentQuestion= questions[questionIndex].valueOf();
   questionIndex ++; 
//determine which choices are right and wrong
//$()currentQuestion.choices[0]





     console.log(currentQuestion);
     console.log(questionIndex);
     console.log(questionsAvailable);

    //timer
    
  
$("#content").append($('<h1 id="time">' + number +"</h1>"));

run(); 
$("#content").append($('<div class="card" id="questionCard">'+'</div>'));    
$("#questionCard").append($("<div class=card-header id=question>" + currentQuestion.question +"</div>"));
$("#questionCard").append($('<form id="choices"/>'));


$("#choices").append($('<ul class="list-group list-group-flush" id="choiceList">' + "</ul>"));
$("#choiceList").append($('<li class="list" id="first">' + '</li>'));
$("#choiceList").append($('<li class="list" id="second">' + '</li>'));
$("#choiceList").append($('<li class="list" id="third">' + '</li>'));
$("#choiceList").append($('<li class="list" id="fourth">' + '</li>'));
$("#choiceList").append($('<li class="list" id="fifth">' + '</li>'));


$("#first").append($('<input class="options" id=option1 type="radio" name="choice"  >'+ currentQuestion.choices[0].c1 +"<br>"));
$("#second").append($('<input class="options" id=option2 type="radio" name="choice" >'+ currentQuestion.choices[0].c2 +"<br>"));
$("#third").append($('<input class="options" id=option3 type="radio" name="choice" >'+ currentQuestion.choices[0].c3 +"<br>"));
$("#fourth").append($('<input class="options" id=option4 type="radio" name="choice" >'+ currentQuestion.choices[0].c4 +"<br>"));


//$("#question").text(currentQuestion.question); Still need this?
$("#option1").attr("value", currentQuestion.choices[0].c1);
$("#option2").attr("value", currentQuestion.choices[0].c2);
$("#option3").attr("value", currentQuestion.choices[0].c3);
$("#option4").attr("value", currentQuestion.choices[0].c4);

//returns option1




$(".options").each(function(){
    if( $(this).prop("value") === currentQuestion.answer){
        rightAnswer=$(this);
        
        $(rightAnswer).parent().addClass("theAnswer"); 
    }  
    else{
        wrongAnswer = $(this);
        $(wrongAnswer).parent().addClass("wrong");
    }

})
console.log(wrongAnswer);
//returns the #id of the radio button pressed
$(".options").one("click", function(){
      
      guess=$(this).attr("id");
      console.log(guess);
      choiceSelected = true;
});

$("#fifth").append($('<button type="button" class="btn btn-primary" id="ready">' + "Ready!" + "</button>"));



function run() {
    myInterval = setInterval(myTimer, 1000);
   
   function myTimer(){
       number--;
       $("#time").html(number);
       if(number === 0){
           clearInterval(myInterval);
           console.log("reallyReallyreally");
           timeExpired(); 
       }
   }}



$("#ready").on("click", function(){
    console.log($(guess));
    if(choiceSelected === true){
        

     selectedAnswer =$("input:radio[name=choice]:checked").val(); 
    $("#ready").parent().hide();
    console.log(selectedAnswer); 
    $(".options").attr("disabled",  "true");
    

//how to tell if the answer is correct
if(selectedAnswer === currentQuestion.answer){
    console.log("yes");
    console.log(selectedAnswer);
    console.log(currentQuestion.answer);
    clearInterval(myInterval);
    
    right();
    
}
//What happens if the answer is correct
else if(selectedAnswer !== currentQuestion.answer && choiceSelected === true){
    console.log("no");
    console.log(selectedAnswer);
    clearInterval(myInterval);
   
    wrong();
}
//how to tell if the answer is wrong



//what happens when the answer is wrong
}});}




//make a switch for what results when they push the button, making each case represent a  button value





function right() {
    //image
    var currentImageCorrectIndex = Math.floor(Math.random()*imageCorrect.length);
    var currentCorrectImage = imageCorrect[currentImageCorrectIndex].valueOf();
    console.log(currentCorrectImage);
    $("#content").prepend(currentCorrectImage);
     
    //color choices
    
    $(rightAnswer).parent().addClass("bg-success");
    $("li").not($(".bg-success")).hide();
    $("#time").text("You Guessed Right!")
    //game score effects
    correct += 1;
    setTimeout(nextQuestion, 3000);
 
}
function wrong() {
    //image
    var currentImageIncorrectIndex = Math.floor(Math.random()*imageIncorrect.length);
    var currentIncorrectImage = imageIncorrect[currentImageIncorrectIndex].valueOf();
    $("#content").prepend(currentIncorrectImage);
    //color choices
     $("#"+ guess).parent().addClass("Chosen");
    $(rightAnswer).parent().addClass("bg-success Chosen").after("Test");
    $("li").not($(".theAnswer")).addClass("bg-danger");
    $("#time").text("You Guessed Wrong!")
    $("li").not($(".Chosen")).hide();
    //game score effects
    incorrect += 1;
    setTimeout(nextQuestion, 20000);

};
function timeExpired(){
    //image
    var currentImageIncorrectIndex = Math.floor(Math.random()*imageIncorrect.length);
    var currentIncorrectImage = imageIncorrect[currentImageIncorrectIndex].valueOf(); 
    $("#content").prepend(currentIncorrectImage);

    //color choices
    
    $(rightAnswer).parent().addClass("theAnswer bg-success");
    
    $("li").not($(".theAnswer")).hide();
    $("#time").text("Times Up!")
   
    //game score effects
    incorrect += 1;
    setTimeout(nextQuestion, 3000);
    
};



function gameStats(){
    var currentImageEndIndex = Math.floor(Math.random()*imageEnd.length);
    var currentEndImage = imageEnd[currentImageEndIndex].valueOf();
    console.log(currentEndImage);
    $("#content").empty();
    $("#content").append($('<div class="card" id="stats">'+ '</div>'));
    $("#stats").append(currentEndImage);
    
    $("#stats").append($('<ul class="list-group list-group-flush" id="statsList">'));
    $("#statsList").append($('<li class="list-group-item" id="choicesRight">' + "Questions Correct: " + correct + '</li>'));
    $("#statsList").append($('<li class="list-group-item" id="choicesWrong">' + "Questions Incorrect: " + incorrect + '</li>'));
    $("#statsList").append($('<li class="list-group-item" id="reset">' + '</li>'));
    $("#reset").append($('<button type="button" class="btn btn-primary" id="restart">' + "Restart" +"</button>"));
    
}




//timer


function nextQuestion(){
    $("#content").empty();
    questionsAvailable--;
    choiceSelected = false;
    if(questionsAvailable > 0){
        number = 20;
        
        console.log(correct);
        console.log(incorrect);
        console.log(questionsAvailable);
        console.log(questionIndex);
        setQuestion();
    }
else{
        console.log("game over");
        clearInterval(myInterval);
        number = 30;
        questionIndex=0;
        gameStats();
    }
   $("#restart").on("click", function(){
       $("#content").empty();
    questionsAvailable = questions.length;
    correct = 0;
    incorrect = 0;
    $("#begin").show();
   });




};  
  
   
      
//once "questionsAvailable" reaches 0 display game stats and display reset button or reincorporate the start button. 

});