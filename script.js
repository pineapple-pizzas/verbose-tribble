alert("Hello from JavaScript!");

const button = document.getElementById("myButton");

let score = document.getElementById("score");
let n = 0;

button.addEventListener("click", function() {
    n+=1;
    score.textContent = "Score: " + n;
});