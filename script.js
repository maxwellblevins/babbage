var question = "What is Charles Babbage's most notable creation?"
var answers = ['First automatic digital computer', 'The original keyboard', 'First search engine', 'The phone'];
var answerButtons = document.getElementsByClassName("quizButton");
for(var spot=0; spot<answers.length; spot++)
{
    answeButtons[spot].innerHTML = answers[spot];
}