var buttonList=document.querySelectorAll(".drum"); // list of button 

//button press detected
for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function(){  // it will call anonymous function when  we click(event) button
        var buttonInnerHTMl=this.innerHTML;
        makeSound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl);

    });
}

// key board key detected
document.addEventListener("keydown",function(event){ 

    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key){
    
    switch(key){
            
        case 'w':
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case 'a':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 
            
        case 's':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButtton=document.querySelector("."+ currentKey);
    activeButtton.classList.add("pressed");

    setTimeout(function(){
        activeButtton.classList.remove("pressed");
    },100);
}