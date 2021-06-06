let sec = 0;
let gameplay =0;
function winning(){
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
    timer();
    setTimeout(function(){
    document.getElementById("tab").style.display = "block";
    }, 2000);
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

function count()
{
    sec += 1;
}
let tot = setInterval(count , 1000);
function timer()
{   
    let toti = sec;
    let tt = document.getElementById("time");
     tt.innerHTML = "</br>" + "Time taken: " + Math.floor((toti)/60) + ":" + Math.floor((toti)%60); 
    clearInterval(tot);
}