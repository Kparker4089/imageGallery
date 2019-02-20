var imageArray = ["Assets/Cloud.png", "Assets/Grass.jpg", "Assets/Grass2.jpg", "Assets/Grass3.jpg", "Assets/Kangaroos.jpg"];

document.getElementById("btn").addEventListener("click", gallery);
var img = document.getElementById("img");

var i = 0;

function gallery()
{
    if (i == 4)
    {
    i = 0;
    }
    else
    {
    i = i + 1;
}
img.src = imageArray[i]; 
}   
 