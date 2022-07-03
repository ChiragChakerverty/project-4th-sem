var n=document.querySelectorAll(".drum").length;

// code for mouse clicks
for(var i=0;i<n;i++)
{   
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var touch=this.innerHTML;

    makeSound(touch);
    buttonAnimation(touch);
})
// Code for keyboard

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key)
{
    
    switch(key)
    {
        case "a":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "s":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "d":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "f":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "k":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        
        default:
    }
}

}

function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
