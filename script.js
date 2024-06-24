//detecting whichb button has been clicked

for(i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInnerHtml = this.innerHTML;

        makeSound(btnInnerHtml);
        btnAnimation(btnInnerHtml);
        
     });

    }

    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        btnAnimation(event.key);
        
    })

    function makeSound(key){
        switch(key){
            case "QQ":
            var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

            case "W":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

            
            case "E":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

            
            case "R":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;

            
            case "A":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;

            
            case "S":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

            
            case "D":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;

            default:
        }
    }
    
    function btnAnimation(pressedKey){
        var currentbtn = document.querySelector("." + pressedKey);
        currentbtn.classList.add("pressed");

        setTimeout(function(){
            currentbtn.classList.remove("pressed")},100);
    }



    //  var audio = new Audio('sounds/crash.mp3');
    //  audio.play(); 
