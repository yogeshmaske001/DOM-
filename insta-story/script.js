var arr=[{dp:"https://images.unsplash.com/photo-1530068768502-1e2fd36c81ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmV1dGlmdWwlMjBnaXJsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1730295096458-56086445d6ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmV1dGlmdWwlMjBnaXJsfGVufDB8fDB8fHww"},{dp:"https://images.unsplash.com/photo-1608232834491-e10fa622f85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJldXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1631887274354-11b56f40ce24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"},{dp:"https://images.unsplash.com/photo-1705986574092-78be34eda5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJldXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1639804817615-e3da07009026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJldXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},{dp:"https://images.unsplash.com/photo-1603830612104-8df6893f5086?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJldXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1552954277-0c45bd503b54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJldXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"}];


var clutter=""
 var storiya=document.querySelector("#storiya");
arr.forEach(function(elem,idx){
   clutter+= `<div   class="story">
                <img id="${idx}" src="${elem.dp} " alt="">
            </div>`       
         
        
})

 storiya.innerHTML=clutter;  
  storiya.addEventListener("click",function(dets){
  document.querySelector("#full-screen").style.display="block"
  document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

   setTimeout(function(){
   document.querySelector("#full-screen").style.display="none"
   },3000)
    
  });