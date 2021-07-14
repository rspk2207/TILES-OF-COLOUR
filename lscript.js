let i,j;
let aud = new Audio('leadsound.mp3');
aud.play();
let sno = window.localStorage.getItem("count");
finalscorecard();
for(i=1;i<=(sno-1);i++)
{
    for(j=(i+1);j<=(sno);j++)
    {
        if(parseInt(window.localStorage.getItem("thefinalscore"+i))<parseInt(window.localStorage.getItem("thefinalscore"+j)))
        {
            let hscore1 = window.localStorage.getItem("scorefinal"+j);
            let lscore1 = window.localStorage.getItem("scorefinal"+i);
            let hscore2 = window.localStorage.getItem("hscorefinal"+j);
            let lscore2 = window.localStorage.getItem("hscorefinal"+i);
            let hfscore = window.localStorage.getItem("thefinalscore"+j);
            let lfscore = window.localStorage.getItem("thefinalscore"+i);
            let hname = window.localStorage.getItem("user"+j);
            let lname = window.localStorage.getItem("user"+i);
            window.localStorage.setItem("thefinalscore"+i,hfscore);
            window.localStorage.setItem("thefinalscore"+j,lfscore);
            window.localStorage.setItem("scorefinal"+i,hscore1);
            window.localStorage.setItem("scorefinal"+j,lscore1);
            window.localStorage.setItem("hscorefinal"+i,hscore2);
            window.localStorage.setItem("hscorefinal"+j,lscore2);
            window.localStorage.setItem("user"+i,hname);
            window.localStorage.setItem("user"+j,lname);
        }
    }
}
function finalscorecard()
{
    let number = window.localStorage.getItem("hnumber");
    let score1 = window.localStorage.getItem("scorefinal"+number);
    let score2 = window.localStorage.getItem("hscorefinal"+number);
    let fscore = Math.ceil((parseInt(score1) + 3*parseInt(score2))/4);
    window.localStorage.setItem("thefinalscore"+number,fscore);
}

/*
USE window.localStorage.clear(); whenever something goes wrong in the leaderboard
*/






for(i=1;i<=sno;i++)
{
if(window.localStorage.getItem("count"))
{
    let name = window.localStorage.getItem("user"+i);
    let score1 = window.localStorage.getItem("scorefinal"+i);
    let score2 = window.localStorage.getItem("hscorefinal"+i);
    let fscore = window.localStorage.getItem("thefinalscore"+i);
    let data = document.getElementById("data");
    data.innerHTML += "<tr><td>" + i + "</td><td>" + name + "</td><td>" + score1 + "</td><td>" + score2 + "</td><td>"+ fscore +"</td></tr>";
}
}
document.getElementById("home").addEventListener("click",function(){gotohome();});

function gotohome(){
    location.href = "index.html";
}
//window.localStorage.clear();