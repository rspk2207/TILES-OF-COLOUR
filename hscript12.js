let audio = new Audio('blocksound.mp3');
let c;
function swap(c)
{
if((c+1)<=36)
{
if (document.getElementById("hbox"+(c+1)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("hbox"+(c+1)).style.backgroundColor = document.getElementById("hbox"+c).style.backgroundColor;
    document.getElementById("hbox"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
if((c-1)>0)
{
if (document.getElementById("hbox"+(c-1)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("hbox"+(c-1)).style.backgroundColor = document.getElementById("hbox"+c).style.backgroundColor;
    document.getElementById("hbox"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
if((c+6)<=36)
{
if (document.getElementById("hbox"+(c+6)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("hbox"+(c+6)).style.backgroundColor = document.getElementById("hbox"+c).style.backgroundColor;
    document.getElementById("hbox"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
if((c-6)>0)
{
if (document.getElementById("hbox"+(c-6)).style.backgroundColor == "rgb(128, 128, 128)")
{
    audio.play();
    document.getElementById("hbox"+(c-6)).style.backgroundColor = document.getElementById("hbox"+c).style.backgroundColor;
    document.getElementById("hbox"+c).style.backgroundColor = "rgb(128, 128, 128)";
}
}
else
{

}
}
document.getElementById("hbox1").addEventListener("click" , function(){swap(1)});
document.getElementById("hbox2").addEventListener("click" , function(){swap(2)});
document.getElementById("hbox3").addEventListener("click" , function(){swap(3)});
document.getElementById("hbox4").addEventListener("click" , function(){swap(4)});
document.getElementById("hbox5").addEventListener("click" , function(){swap(5)});
document.getElementById("hbox6").addEventListener("click" , function(){swap(6)});
document.getElementById("hbox7").addEventListener("click" , function(){swap(7)});
document.getElementById("hbox8").addEventListener("click" , function(){swap(8)});
document.getElementById("hbox9").addEventListener("click" , function(){swap(9)});
document.getElementById("hbox10").addEventListener("click" , function(){swap(10)});
document.getElementById("hbox11").addEventListener("click" , function(){swap(11)});
document.getElementById("hbox12").addEventListener("click" , function(){swap(12)});
document.getElementById("hbox13").addEventListener("click" , function(){swap(13)});
document.getElementById("hbox14").addEventListener("click" , function(){swap(14)});
document.getElementById("hbox15").addEventListener("click" , function(){swap(15)});
document.getElementById("hbox16").addEventListener("click" , function(){swap(16)});
document.getElementById("hbox17").addEventListener("click" , function(){swap(17)});
document.getElementById("hbox18").addEventListener("click" , function(){swap(18)});
document.getElementById("hbox19").addEventListener("click" , function(){swap(19)});
document.getElementById("hbox20").addEventListener("click" , function(){swap(20)});
document.getElementById("hbox21").addEventListener("click" , function(){swap(21)});
document.getElementById("hbox22").addEventListener("click" , function(){swap(22)});
document.getElementById("hbox23").addEventListener("click" , function(){swap(23)});
document.getElementById("hbox24").addEventListener("click" , function(){swap(24)});
document.getElementById("hbox25").addEventListener("click" , function(){swap(25)});
document.getElementById("hbox26").addEventListener("click" , function(){swap(26)});
document.getElementById("hbox27").addEventListener("click" , function(){swap(27)});
document.getElementById("hbox28").addEventListener("click" , function(){swap(28)});
document.getElementById("hbox29").addEventListener("click" , function(){swap(29)});
document.getElementById("hbox30").addEventListener("click" , function(){swap(30)});
document.getElementById("hbox31").addEventListener("click" , function(){swap(31)});
document.getElementById("hbox32").addEventListener("click" , function(){swap(32)});
document.getElementById("hbox33").addEventListener("click" , function(){swap(33)});
document.getElementById("hbox34").addEventListener("click" , function(){swap(34)});
document.getElementById("hbox35").addEventListener("click" , function(){swap(35)});
document.getElementById("hbox36").addEventListener("click" , function(){swap(36)});
document.getElementById("home").addEventListener("click",function(){gotomain()});


function gotomain(){
location.href = "index.html";
}
