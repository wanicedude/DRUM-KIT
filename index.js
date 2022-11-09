
// document.querySelector("button").addEventListener("click", handleClick)



// function handleClick(){
//     alert("I got clicked");  
    
// }


// Doing it with anonymous function
// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked"); })

// Using this for all 



// var audio = new Audio[('sounds/crash.mp3'),('sounds/kick-bass.mp3'),('sounds/snare.mp3'),('sounds/tom-1.mp3'),('sounds/tom-2.mp3'),('sounds/tom-3.mp3'),('sounds/tom-4.mp3')]

// Detecting Butto Press

var cart = document.addEventListener("keydown", function(event){
    chart = event.key

})

var aba = document.querySelectorAll(".drum");

for (var i = 0; i < aba.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonHTML = this.innerHTML;
    
        makeSound(buttonHTML)
        buttonAnimation(buttonHTML)
        });


}


// Detecting Keyboard Press
var chart = document.addEventListener("keydown", function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
 
})

function makeSound (key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var kick = new Audio("sounds/kickbass.mp3");
            kick.play();
            break;
        
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;



        default: console.log(buttonHTML);

}

}

// TO Animate 

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." +currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);

}