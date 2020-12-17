// DOM
const currentword=document.getElementById("word");
const wordinput=document.getElementById("textinp");
const msg = document.getElementById('msg');
const time=document.getElementById("timer");
const currentscore=document.getElementById("score");
const restart = document.getElementById('bttn');

//array of words
const words=['javascript','css','jquery','html','bootstrap','react','developer','software','engineering','chrome','github','code','bug'];

var interval;
var timeleft = 5;
var score = 0;


// Display the random word from the array
function randomWords(words)
{
    const randomIndex = Math.floor(Math.random() * words.length);
	currentword.innerHTML = words[randomIndex];
}


function countDown()
{
    if(timeleft===0)
    {
       msg.style.color="red";
       msg.innerHTML="Game Over!";
       wordinput.value="";
       wordinput.disabled=true;
       restart.style.display = "inline-block";
       clearInterval(interval);
       timeleft=5;
       score=0;
    }
    else if(timeleft>0)
       {
        timeleft--; 
       }  
       time.innerHTML=timeleft;
}

function matchWord(){

    msg.innerHTML="";

    if(wordinput.value.toLowerCase()==currentword.innerHTML)
    {
        wordinput.value="";
        msg.style.color="green";
        msg.innerHTML="Correct!!!!"
        randomWords(words);
        timeleft=5;  
        time.innerHTML=timeleft;
        score++;
        currentscore.innerHTML=score;
    }
    else
    {
        msg.innerHTML="";
    }
}
// update the game on load
function updateGame(){

    msg.innerHTML="";
    wordinput.value="";
    wordinput.disabled=false;
    time.innerHTML=timeleft;
    currentscore.innerHTML=score;
    restart.style.display="none"
    randomWords(words);
    wordinput.addEventListener('input',matchWord);
    interval=setInterval(countDown,1000);

}
window.addEventListener('load',updateGame);