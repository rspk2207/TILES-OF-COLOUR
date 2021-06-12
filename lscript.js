let i,j;
let sno = window.localStorage.getItem("count");
for(i=1;i<=(sno-1);i++)
{
    for(j=(i+1);j<=(sno);j++)
    {
        if(parseInt(window.localStorage.getItem("scorefinal"+i))<parseInt(window.localStorage.getItem("scorefinal"+j)))
        {
            let hscore = window.localStorage.getItem("scorefinal"+j);
            let hname = window.localStorage.getItem("user"+j);
            let lscore = window.localStorage.getItem("scorefinal"+i);
            let lname = window.localStorage.getItem("user"+i);
            window.localStorage.setItem("scorefinal"+i,hscore);
            window.localStorage.setItem("scorefinal"+j,lscore);
            window.localStorage.setItem("user"+i,hname);
            window.localStorage.setItem("user"+j,lname);
        }
    }
}











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