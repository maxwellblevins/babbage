var question = "What is Charles Babbage's most notable creation?"
var answers = ['First automatic digital computer', 
                'The original keyboard', 
                'First search engine', 
                'The phone'];
var answerButtons = document.getElementsByClassName("quizButton");
var correct = 0;  

document.getElementById("question").innerHTML = question;

for(var spot=0; spot<answers.length; spot++) 
{
    answerButtons[spot].innerHTML = answers[spot];


    answerButtons[spot].addEventListener('click', function() {
    if(this.innerHTML == answers[correct]) { 
        this.setAttribute('style','background-color:rgb(76,175,80);'); 
    } else { 
        this.setAttribute('style','backgrund-color:rgb(210,50,35);');
    }
    });
}

