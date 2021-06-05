let colorr = ['#006400','#00008b','#ff0000','#ffffff','#ffa500','#a52a2a'];
let arr = [0,0,0,0,0,0];
let arrb = [0,0,0,0,0,0];
for(let i=1;i<10;i++)
{
let g = document.getElementById("boxf" + i);
let rand = colorr[Math.floor(Math.random() * colorr.length)];
for(let k=0;k<6;k++)
{
    if(arr[k]<3)
    {
    if(rand == colorr[k])
    {
        arr[k]++;
        break;
    }
    }
    else
    {
        for(let l=0;l<6;l++)
        {
            if(arr[l]<3)
            {
                rand = colorr[l];
                arr++;
                break;
            }
        }
    }

}
    g.style.backgroundColor = rand;
}
for(let i=1;i<25;i++)
{
    rand = colorr[Math.floor(Math.random() * colorr.length)];
    let s = document.getElementById("box" + i);
    top:
    for(let k=0;k<6;k++)
{
    if(arrb[k]<4)
    {
    if(rand == colorr[k])
    {
        arrb[k]++;
        break top;
    }
    }
    else
    {
        for(let l=0;l<6;l++)
        {
            if(arrb[l]<4)
            {
                rand = colorr[l];
                arrb[l]++;
                break top;
            }
        }
    }

}
    s.style.backgroundColor = rand;
}
document.getElementById("box25").style.backgroundColor = "#808080";

/*
let rew;
for(i=1;i<10;i++)
{
rew = document.getElementById("boxf" + i);
rew.style.width = calc();
rew.style.height = calc();
} 
function calc()
{
    let wi = (70*(window.innerWidth)/(screen.width)) + "px";
    return wi;
}
*/