let colorr = ['#006400','#00008b','#ff0000','#ffffff','#ffa500','#a52a2a'];
let arr = [0,0,0,0,0,0];
let arrb = [0,0,0,0,0,0];
for(let i=1;i<17;i++)
{
let g = document.getElementById("hboxf" + i);
let rand = colorr[Math.floor(Math.random() * colorr.length)];
for(let k=0;k<6;k++)
{
    if(arr[k]<4)
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
            if(arr[l]<4)
            {
                rand = colorr[l];
                arr[l]++;
                break;
            }
        }
    }

}
    g.style.backgroundColor = rand;
}
for(let i=1;i<36;i++)
{
    rand = colorr[Math.floor(Math.random() * colorr.length)];
    let s = document.getElementById("hbox" + i);
    top:
    for(let k=0;k<6;k++)
{
    if(arrb[k]<6)
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
            if(arrb[l]<6)
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
document.getElementById("hbox36").style.backgroundColor = "#808080";
