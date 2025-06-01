var istatus=document.querySelector("h5");
var follow=document.querySelector("#Follow");
var check=0;

follow.addEventListener("click",function(){
    if (check==0){
     follow.innerHTML="Following"
     follow.style.backgroundColor = "#dadada"
     follow.style.color="black"
     istatus.innerHTML="Friend" 
     istatus.style.color="green"
     check=1
    }else{
     follow.innerHTML="Follow"
     follow.style.backgroundColor = "#3796ee"
     follow.style.color="white"
     istatus.innerHTML="Stranger" 
     istatus.style.color="red"
     check=0
    }

});

 
 