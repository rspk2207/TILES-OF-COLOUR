let audio = new Audio('blocksound.mp3');
let c;
/*
let numb = window.localStorage.getItem("number");
window.localStorage.setItem("scorefinal"+(numb+1),0);
window.localStorage.setItem("hscorefinal"+(numb+1),0);
*/
function swap(c)
{
if((c+1)<=25)
{
if (document.getElementById("box"+(c+1)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("box"+(c+1)).style.backgroundColor = document.getElementById("box"+c).style.backgroundColor;
    document.getElementById("box"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
if((c-1)>0)
{
if (document.getElementById("box"+(c-1)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("box"+(c-1)).style.backgroundColor = document.getElementById("box"+c).style.backgroundColor;
    document.getElementById("box"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
if((c+5)<=25)
{
if (document.getElementById("box"+(c+5)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("box"+(c+5)).style.backgroundColor = document.getElementById("box"+c).style.backgroundColor;
    document.getElementById("box"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
if((c-5)>0)
{
if (document.getElementById("box"+(c-5)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("box"+(c-5)).style.backgroundColor = document.getElementById("box"+c).style.backgroundColor;
    document.getElementById("box"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
else
{

}
}
document.getElementById("box1").addEventListener("click" , function(){swap(1)});
document.getElementById("box2").addEventListener("click" , function(){swap(2)});
document.getElementById("box3").addEventListener("click" , function(){swap(3)});
document.getElementById("box4").addEventListener("click" , function(){swap(4)});
document.getElementById("box5").addEventListener("click" , function(){swap(5)});
document.getElementById("box6").addEventListener("click" , function(){swap(6)});
document.getElementById("box7").addEventListener("click" , function(){swap(7)});
document.getElementById("box8").addEventListener("click" , function(){swap(8)});
document.getElementById("box9").addEventListener("click" , function(){swap(9)});
document.getElementById("box10").addEventListener("click" , function(){swap(10)});
document.getElementById("box11").addEventListener("click" , function(){swap(11)});
document.getElementById("box12").addEventListener("click" , function(){swap(12)});
document.getElementById("box13").addEventListener("click" , function(){swap(13)});
document.getElementById("box14").addEventListener("click" , function(){swap(14)});
document.getElementById("box15").addEventListener("click" , function(){swap(15)});
document.getElementById("box16").addEventListener("click" , function(){swap(16)});
document.getElementById("box17").addEventListener("click" , function(){swap(17)});
document.getElementById("box18").addEventListener("click" , function(){swap(18)});
document.getElementById("box19").addEventListener("click" , function(){swap(19)});
document.getElementById("box20").addEventListener("click" , function(){swap(20)});
document.getElementById("box21").addEventListener("click" , function(){swap(21)});
document.getElementById("box22").addEventListener("click" , function(){swap(22)});
document.getElementById("box23").addEventListener("click" , function(){swap(23)});
document.getElementById("box24").addEventListener("click" , function(){swap(24)});
document.getElementById("box25").addEventListener("click" , function(){swap(25)});
document.getElementById("home").addEventListener("click",function(){gotomain()});


function gotomain(){
location.href = "index.html";
}
