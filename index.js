//1- Mouse Action:

//Number of buttons with calss "drum".
var numbersOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i < numbersOfDrumButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);                            //"click" is an event.
    buttonAnimation(this.innerHTML);
  });
}

//2- Keyboard Action:
document.addEventListener("keydown", function(e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

/* "e" is a prameter, "keydown" is an event and
"key" is the event's property which gets the pressed Key.
but we can't use "keydown.key" to get which key was pressed,
So, we pass the event who trigred the function --> (keydown), inside
the function as a prameter: --> "e".
Which means that: "e" = "keydown" and "e.key" is the pressed key.*/




// assigne the sound according to the event( mouse click and keyboard press):
function makeSound(carcater) {

  switch (carcater) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(carcater);
  }
}

//Create a shadow around the button during the event( mouse click and keyboard press):
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}
