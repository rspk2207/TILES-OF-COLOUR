let sec = 0;
let audios = new Audio('gameover.mp3');
let counts = 0;
let gameplay =0;
let numb = window.localStorage.getItem("number");
window.localStorage.setItem("scorefinal"+numb,0);
function winning(){
    counts += 1;
if(document.getElementById("boxf1").style.backgroundColor == document.getElementById("box7").style.backgroundColor)
{
    if(document.getElementById("boxf2").style.backgroundColor == document.getElementById("box8").style.backgroundColor)
{
    if(document.getElementById("boxf3").style.backgroundColor == document.getElementById("box9").style.backgroundColor)
{
    if(document.getElementById("boxf4").style.backgroundColor == document.getElementById("box12").style.backgroundColor)
{
    if(document.getElementById("boxf5").style.backgroundColor == document.getElementById("box13").style.backgroundColor)
{
    if(document.getElementById("boxf6").style.backgroundColor == document.getElementById("box14").style.backgroundColor)
{
    if(document.getElementById("boxf7").style.backgroundColor == document.getElementById("box17").style.backgroundColor)
{
    if(document.getElementById("boxf8").style.backgroundColor == document.getElementById("box18").style.backgroundColor)
{
    if(document.getElementById("boxf9").style.backgroundColor == document.getElementById("box19").style.backgroundColor)
{
    gameplay = 1;
    if(gameplay == 1)
    {
        timer();
        scorecard();
        audios.play();
    }
    document.getElementById("tab").style.display = "block";
    document.getElementById("play-again").style.display = "none";
}
}
}
}
}
}
}
}
}
}
function load()
{
    let fresh = window.localStorage.getItem("number");
    window.localStorage.removeItem("scorefinal" + fresh);
    fresh--;
    window.localStorage.setItem("number",fresh);

    window.location.reload();
    document.getElementById("tab").style.display = "none";
}
document.getElementById("box1").addEventListener('click', function() {winning()});
document.getElementById("box2").addEventListener('click', function() {winning()});
document.getElementById("box3").addEventListener('click', function() {winning()});
document.getElementById("box4").addEventListener('click', function() {winning()});
document.getElementById("box5").addEventListener('click', function() {winning()});
document.getElementById("box6").addEventListener('click', function() {winning()});
document.getElementById("box7").addEventListener('click', function() {winning()});
document.getElementById("box8").addEventListener('click', function() {winning()});
document.getElementById("box9").addEventListener('click', function() {winning()});
document.getElementById("box10").addEventListener('click', function() {winning()});
document.getElementById("box11").addEventListener('click', function() {winning()});
document.getElementById("box12").addEventListener('click', function() {winning()});
document.getElementById("box13").addEventListener('click', function() {winning()});
document.getElementById("box14").addEventListener('click', function() {winning()});
document.getElementById("box15").addEventListener('click', function() {winning()});
document.getElementById("box16").addEventListener('click', function() {winning()});
document.getElementById("box17").addEventListener('click', function() {winning()});
document.getElementById("box18").addEventListener('click', function() {winning()});
document.getElementById("box19").addEventListener('click', function() {winning()});
document.getElementById("box20").addEventListener('click', function() {winning()});
document.getElementById("box21").addEventListener('click', function() {winning()});
document.getElementById("box22").addEventListener('click', function() {winning()});
document.getElementById("box23").addEventListener('click', function() {winning()});
document.getElementById("box24").addEventListener('click', function() {winning()});
document.getElementById("box25").addEventListener('click', function() {winning()});
document.getElementById("pa").addEventListener('click', function(){load()});
document.getElementById("hacker").addEventListener('click', function(){hacker()});
document.getElementById("leaderboard").addEventListener("click",function(){golead();});
document.getElementById("home").addEventListener("click",function(){gohome();});
document.getElementById("play-again").addEventListener("click",function(){pagain();});
function count()
{
    sec += 1;
}
let tot = setInterval(count , 1000);
function timer()
{   
    let toti = sec;
    let tt = document.getElementById("time");
    if((toti)%60 <10)
     {
         tt.innerHTML = "</br>" + "Time taken : 0" + Math.floor((toti)/60) + ":0" + Math.floor((toti)%60);
     }
         else
    {
         tt.innerHTML = "</br>" + "Time taken : 0" + Math.floor((toti)/60) + ":" + Math.floor((toti)%60);
    }
    clearInterval(tot);
}
function scorecard()
{
    let total = sec;
    let point;
    if(counts <75)
    {
        point = (10000/total);
    }
    else
    {
        point = (10000/(total + counts));
    }
    let sc = document.getElementById("score");
    sc.innerHTML = "</br>" + "Score : " + Math.floor(point) + " pts";
    if(window.localStorage.getItem("count")!= null)
    {
    let number = window.localStorage.getItem("number");
    number++;
    window.localStorage.setItem("scorefinal" + number, Math.floor(point));
    window.localStorage.setItem("number",number);
    window.localStorage.setItem("hscorefinal"+number,0);
}
}
function golead(){
    location.href = "leaderboard.html";
}
function gohome(){
    
    location.href = "index.html";
}
function hacker(){
    let number = window.localStorage.getItem("number");
    window.localStorage.setItem("hnumber",number);
    location.href = "hacker.html";
}
function clocks()
    {
        if((sec%60)<10)
        {
            document.getElementById("clock").innerHTML = "</br>0" + Math.floor(sec/60) + ":0" + Math.floor(sec%60);
        }
        else
        document.getElementById("clock").innerHTML = "</br>0" + Math.floor(sec/60) + ":" + Math.floor(sec%60);
    }
function pagain(){
    window.location.reload();
}
setInterval(clocks,1000);