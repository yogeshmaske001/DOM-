var love=document.querySelector("i");
var img=document.querySelector("#container");

img.addEventListener("dblclick",function(){
    love.style.opacity=0.6; 

    setTimeout(function(){
    love.style.opacity=0; 
},1500);

});

 