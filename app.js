var imageArray1 = ["Assets3/Painting1.jpg","Assets3/Painting2.jpg","Assets3/Painting3.jpg","Assets3/Painting4.jpg","Assets3/Painting5.jpg"];
var imageArray2 = ["Assets3/Painting6.jpg","Assets3/Painting7.jpg","Assets3/Painting8.jpg","Assets3/Painting9.jpg","Assets3/Painting10.jpg"];
var imageArray3 = ["Assets3/Painting11.jpg","Assets3/Painting12.jpg","Assets3/Painting13.jpg","Assets3/Painting14.jpg","Assets3/Painting15.jpg"];
var imageArray4 = ["Assets3/Painting16.jpg","Assets3/Painting17.jpg","Assets3/Painting18.jpeg","Assets3/Painting19.jpg","Assets3/Painting20.jpg"];

document.getElementById("img1").addEventListener("click", gallery1);
var img = document.getElementById("img1");

var i = 0;
var l = 0;
var t = 0;
var g = 0;
function gallery1()
{
    if (i == 4)
    {
    i = 0;
    }
    else
    {
    i = i + 1;
}
img.src = imageArray1[i];              
}   

document.getElementById("img2").addEventListener("click", gallery2);
var img2 = document.getElementById("img2");
function gallery2()
{
    if (l == 4)
    {
    l = 0;
    }
    else
    {
    l = l + 1;
}
img2.src = imageArray2[l]; 
}   
 

document.getElementById("img3").addEventListener("click", gallery3);
var img3 = document.getElementById("img3");
function gallery3()
{
    if (t == 4)
    {
    t = 0;
    }
    else
    {
    t = t + 1;
}
img3.src = imageArray3[t]; 
}   
 

document.getElementById("img4").addEventListener("click", gallery4);
var img4 = document.getElementById("img4");
function gallery4()
{
    if (g == 4)
    {
    g = 0;
    }
    else
    {
    g = g + 1;
}
img4.src = imageArray4[g]; 
}   
 