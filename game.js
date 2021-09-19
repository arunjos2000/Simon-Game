const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern=[];

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function  nextSequence(){
    var randomNumber = Math.floor((Math.random() * 3) + 1); 
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour); 

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


// var numberOfButtons= document.querySelectorAll("div[type='button']").length;
// for(var i=0;i<numberOfButtons;i++){
//   document.querySelectorAll("div[type='button']")[i].addEventListener("click", function(){
//         var userChosenColour= $("#randomChosenColour");
// playSound(userChosenColour);
// animatePress(userChosenColour);
// userClickedPattern.push(userChosenColour);
//   });
// }
// function playSound(key){
//     switch(key){
//             case "green":
//                     var tom1= new Audio("sounds/green.mp3");
//                     tom1.play();
//                     break;
//             case "red":
//                     var tom2= new Audio("sounds/red.mp3");
//                     tom2.play();
//                     break;
//             case "yellow":
//                     var tom3= new Audio("sounds/yellow.mp3");
//                     tom3.play();
//                       break;
//             case "blue":
//                     var tom4= new Audio("sounds/blue.mp3");
//                     tom4.play();
//                      break;  
//             default:  var tom5= new Audio("sounds/wrong.mp3");
//                       tom5.play();
//                       break; 
//            }     
// }

//  function animatePress(_currentColour){
//  $("._currentColour").addClass("pressed");
//  }