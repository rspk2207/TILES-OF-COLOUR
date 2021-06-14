document.getElementById("lessgo").addEventListener("click",function(){go();});
document.getElementById("leaderboard").addEventListener("click",function(){golead();});
function go(){
let counter = window.localStorage.getItem("count");
counter++;
let lessgo = document.querySelector("#username").value;
window.localStorage.setItem("user" + counter, lessgo);
window.localStorage.setItem("count",counter);
location.href = "game.html";
}
function golead(){
    location.href = "leaderboard.html";
}