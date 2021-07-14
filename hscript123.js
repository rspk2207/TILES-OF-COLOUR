let sec = 0;
let audios = new Audio('gameover.mp3');
let counts = 0;
let gameplay =0;
function winning(){
    counts += 1;
if(document.getElementById("hboxf1").style.backgroundColor == document.getElementById("hbox8").style.backgroundColor)
{
    if(document.getElementById("hboxf2").style.backgroundColor == document.getElementById("hbox9").style.backgroundColor)
{
    if(document.getElementById("hboxf3").style.backgroundColor == document.getElementById("hbox10").style.backgroundColor)
{
    if(document.getElementById("hboxf4").style.backgroundColor == document.getElementById("hbox11").style.backgroundColor)
{
    if(document.getElementById("hboxf5").style.backgroundColor == document.getElementById("hbox14").style.backgroundColor)
{
    if(document.getElementById("hboxf6").style.backgroundColor == document.getElementById("hbox15").style.backgroundColor)
{
    if(document.getElementById("hboxf7").style.backgroundColor == document.getElementById("hbox16").style.backgroundColor)
{
    if(document.getElementById("hboxf8").style.backgroundColor == document.getElementById("hbox17").style.backgroundColor)
{
    if(document.getElementById("hboxf9").style.backgroundColor == document.getElementById("hbox20").style.backgroundColor)
{
    if(document.getElementById("hboxf10").style.backgroundColor == document.getElementById("hbox21").style.backgroundColor)
{
    if(document.getElementById("hboxf11").style.backgroundColor == document.getElementById("hbox22").style.backgroundColor)
{
    if(document.getElementById("hboxf12").style.backgroundColor == document.getElementById("hbox23").style.backgroundColor)
{
    if(document.getElementById("hboxf13").style.backgroundColor == document.getElementById("hbox26").style.backgroundColor)
{
    if(document.getElementById("hboxf14").style.backgroundColor == document.getElementById("hbox27").style.backgroundColor)
{
    if(document.getElementById("hboxf15").style.backgroundColor == document.getElementById("hbox28").style.backgroundColor)
{
    if(document.getElementById("hboxf16").style.backgroundColor == document.getElementById("hbox29").style.backgroundColor)
{
    gameplay = 1;
    if(gameplay == 1)
    {
        timer();
        scorecard();
        audios.play();
    }
    document.getElementById("htab").style.display = "block";
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
}
}
}
}
}
}
}
function load()
{
    let fresh = window.localStorage.getItem("hnumber");
    window.localStorage.removeItem("hscorefinal" + fresh);
    fresh--;
    window.localStorage.setItem("hnumber",fresh);

    window.location.reload();
    document.getElementById("htab").style.display = "none";
}
document.getElementById("hbox1").addEventListener('click', function() {winning()});
document.getElementById("hbox2").addEventListener('click', function() {winning()});
document.getElementById("hbox3").addEventListener('click', function() {winning()});
document.getElementById("hbox4").addEventListener('click', function() {winning()});
document.getElementById("hbox5").addEventListener('click', function() {winning()});
document.getElementById("hbox6").addEventListener('click', function() {winning()});
document.getElementById("hbox7").addEventListener('click', function() {winning()});
document.getElementById("hbox8").addEventListener('click', function() {winning()});
document.getElementById("hbox9").addEventListener('click', function() {winning()});
document.getElementById("hbox10").addEventListener('click', function() {winning()});
document.getElementById("hbox11").addEventListener('click', function() {winning()});
document.getElementById("hbox12").addEventListener('click', function() {winning()});
document.getElementById("hbox13").addEventListener('click', function() {winning()});
document.getElementById("hbox14").addEventListener('click', function() {winning()});
document.getElementById("hbox15").addEventListener('click', function() {winning()});
document.getElementById("hbox16").addEventListener('click', function() {winning()});
document.getElementById("hbox17").addEventListener('click', function() {winning()});
document.getElementById("hbox18").addEventListener('click', function() {winning()});
document.getElementById("hbox19").addEventListener('click', function() {winning()});
document.getElementById("hbox20").addEventListener('click', function() {winning()});
document.getElementById("hbox21").addEventListener('click', function() {winning()});
document.getElementById("hbox22").addEventListener('click', function() {winning()});
document.getElementById("hbox23").addEventListener('click', function() {winning()});
document.getElementById("hbox24").addEventListener('click', function() {winning()});
document.getElementById("hbox25").addEventListener('click', function() {winning()});
document.getElementById("hbox26").addEventListener('click', function() {winning()});
document.getElementById("hbox27").addEventListener('click', function() {winning()});
document.getElementById("hbox28").addEventListener('click', function() {winning()});
document.getElementById("hbox29").addEventListener('click', function() {winning()});
document.getElementById("hbox30").addEventListener('click', function() {winning()});
document.getElementById("hbox31").addEventListener('click', function() {winning()});
document.getElementById("hbox32").addEventListener('click', function() {winning()});
document.getElementById("hbox33").addEventListener('click', function() {winning()});
document.getElementById("hbox34").addEventListener('click', function() {winning()});
document.getElementById("hbox35").addEventListener('click', function() {winning()});
document.getElementById("hbox36").addEventListener('click', function() {winning()});
document.getElementById("hpa").addEventListener('click', function(){load()});
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
    let tt = document.getElementById("htime");
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
    if(counts <125)
    {
        point = (15000/total);
    }
    else
    {
        point = (20000/(total + counts));
    }
    let sc = document.getElementById("hscore");
    sc.innerHTML = "</br>" + "Score : " + Math.floor(point) + " pts";
    if(window.localStorage.getItem("count")!= null)
    {
    let number = window.localStorage.getItem("hnumber");
    window.localStorage.setItem("hscorefinal" + number, Math.floor(point));
    window.localStorage.setItem("hnumber",number);
}
}
function golead(){
    location.href = "leaderboard.html";
}
function gohome(){
    
    location.href = "index.html";
}
function clocks()
    {
        if((sec%60)<10)
        {
            document.getElementById("hclock").innerHTML = "</br>0" + Math.floor(sec/60) + ":0" + Math.floor(sec%60);
        }
        else
        document.getElementById("hclock").innerHTML = "</br>0" + Math.floor(sec/60) + ":" + Math.floor(sec%60);
    }
function pagain(){
    window.location.reload();
}
setInterval(clocks,1000);