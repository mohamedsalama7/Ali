
let inputs = document.querySelectorAll(".input button");
let output = document.querySelector(".screen");

var audio = new Audio('final.mp3');

output.addEventListener("keydown", (e) => {
  e.preventDefault();
})


inputs.forEach(element => {
  element.addEventListener("click", (ele) => {
    audio.play();
    if (element.getAttribute("value") == "c") {
      output.value = "";

    } else if (element.getAttribute("value") == "^") {
      output.value = output.value.substring(0, output.value.length - 1);
    } else if (element.getAttribute("value") == "=") {
      output.value = eval(output.value);
    }
    else {
      output.value += element.value;
    }
  })
})

