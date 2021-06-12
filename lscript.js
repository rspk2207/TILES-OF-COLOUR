let i;
let sno = window.localStorage.getItem("count");
for(i=1;i<=sno;i++)
{
if(window.localStorage.getItem("count"))
{
    let name = window.localStorage.getItem("user"+i);
    let score = window.localStorage.getItem("scorefinal"+i);
    let data = document.getElementById("data");
    data.innerHTML += "<tr><td>" + i + "</td><td>" + name + "</td><td>" + score + "</td></tr>";
}
}
document.getElementById("home").addEventListener("click",function(){gotohome();});

function gotohome(){
    location.href = "indexop.html";
}