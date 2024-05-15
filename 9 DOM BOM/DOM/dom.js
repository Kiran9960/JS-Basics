// target element with query selector
let h1Selected = document.querySelector("h1");
let TitleSelect = document.querySelector("#title");

console.log( TitleSelect, h1Selected);



// on load becomes red with inner html update 
let para = document.querySelector(".intro");
para.innerHTML=" THIS IS UPDATD INTRO PARA ";
// change style
para.style.backgroundColor="red";
para.style.color="#fff";



// change innrer html with event listener 
let paraSelector = document.querySelector("#myPara");
paraSelector.style.cursor="pointer"
// paraSelector.innerHTML="Updated para ";

// event listener  
paraSelector.addEventListener("click", function(){
    // console.log('paraSelector clicked ');
    paraSelector.innerHTML=" Changed para #myPara content"
    paraSelector.style.backgroundColor="purple";
    paraSelector.style.color="#fff";
})

//change para with image 
let placeImg=document.querySelector("#placeImg");
placeImg.addEventListener("click", function(){


    let newIamge = document.createElement("img");
    newIamge.src="fuji-san.jpg";
    newIamge.alt="New image description";

    placeImg.innerHTML="";
    placeImg.appendChild(newIamge);
    newIamge.className="newIamge";
    

    console.log("clicked");

})


// image scale functions

    function scaleImg(id){
        let scaleImg=document.querySelector(id);
        scaleImg.style.scale=1.2;
        scaleImg.style.transitionDuration="600ms";

        scaleImg.addEventListener("mouseleave", function(){

            scaleImg.style.scale=1;
            scaleImg.style.transitionDuration="600ms";

        });

    }
    
   

// delete element by passing ID to function..

function removeEle(id){
    let targetImageToRemove = document.getElementById(id);
    
    targetImageToRemove.remove();
}