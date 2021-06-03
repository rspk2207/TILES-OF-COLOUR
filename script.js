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