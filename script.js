
let colorr = ['#006400','#00008b','#ff0000','#ffffff','#ffa500','#a52a2a'];
for(let i=1;i<10;i++)
{
let rand = colorr[Math.floor(Math.random() * colorr.length)];
let g = document.getElementById("boxf" + i);
g.style.backgroundColor = rand;
}
for(let i=1;i<25;i++)
{
    rand = colorr[Math.floor(Math.random() * colorr.length)];
    let s = document.getElementById("box" + i);
    s.style.backgroundColor = rand;
}
let k = document.getElementsByClassName("game");
var c;
function swap(c)
{
if(k[c+1].style.backgroundColor == "gray")
{
    k[c+1].style.backgroundColor = k[c].style.backgroundColor;
    k[c].style.backgroundColor = "gray";
}
else if(k[c-1].style.backgroundColor == "gray")
{
    k[c-1].style.backgroundColor = k[c].style.backgroundColor;
    k[c].style.backgroundColor = "gray";
}
else if(k[c+5].style.backgroundColor == "gray")
{
    k[c+5].style.backgroundColor = k[c].style.backgroundColor;
    k[c].style.backgroundColor = "gray";
}
else if(k[c-5].style.backgroundColor == "gray")
{
    k[c-5].style.backgroundColor = k[c].style.backgroundColor;
    k[c].style.backgroundColor = "gray";
}
else{

}
}
for(i=0;i<25;i++)
{
k[i].addEventListener('click', swap(i));
}