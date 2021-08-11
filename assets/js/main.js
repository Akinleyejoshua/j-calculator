var darkmodeSlider = document.querySelector(".dark-mode-btn div");
var darkmodebtn = document.querySelector(".dark-mode-btn")
const darkmode = () => {

    darkmodeSlider.classList.toggle("on");
    darkmodebtn.classList.toggle("on");
    var html = document.querySelectorAll("*")
    for (i = 0; html.length > i; i++) {
        html[i].classList.toggle("darkmode")
    }

}

var input = document.querySelector(".input-display");
var output = document.querySelector(".output-display");
var valButtons = document.querySelectorAll(".button-panel button");
var historyBar = document.querySelector(".history .items");
var prevAns = "";
var prevInput = "";

const sendtohistory = () => {
    historyBar.innerHTML += `
    <div class="item">
        <p class="problem">Problem: ${prevInput}</p>
        <p class="ans">Ans: ${prevAns}</p>
    </div>
    `
}

for (i = 0; valButtons.length > i; i++) {
    valButtons[i].addEventListener("click", (event) => {
        document.querySelector(".fa-arrow-right").onclick();
        if (event.target.innerHTML === "sin") {
            output.innerHTML = Math.sin(input.value)
            prevAns = output.innerHTML;
            prevInput = 'sin('+ input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "cos") {
            output.innerHTML = Math.cos(input.value)
            prevAns = output.innerHTML;
            prevInput = 'cos('+ input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "tan") {
            output.innerHTML = Math.tan(input.value)
            prevInput = 'tan('+ input.value;
            prevInput = input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "log") {
            output.innerHTML = Math.log(input.value)
            prevAns = output.innerHTML;
            prevInput = 'log('+ input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "abs") {
            output.innerHTML = Math.abs(input.value)
            prevAns = output.innerHTML;
            prevInput = 'abs|'+ input.value + "|";
            sendtohistory();

        } else if (event.target.value === "sqrt") {
            output.innerHTML = Math.sqrt(input.value)
            prevAns = output.innerHTML;
            prevInput = '&Sqrt;'+ input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "-/+") {
            output.innerHTML = (-1 * input.value)
            prevAns = output.innerHTML;
            prevInput = 'inverse('+ input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "1/x") {
            output.innerHTML = (1 / input.value)
            prevAns = output.innerHTML;
            prevInput = input.value;
            sendtohistory();

        } else if (event.target.innerHTML === "%") {
            output.innerHTML = (input.value / 100) + "%";
            prevAns = output.innerHTML;
            prevInput = input.value;
            sendtohistory();

        } else if (event.target.value === "del") {
            input.value = input.value.substring(0, input.value.length - 1);
        } else if (event.target.innerHTML === "=") {
            if (input.value === "" || output.innerHTML === "") {
                input.value = "No Math... Problem Given";
                input.classList.toggle("fadein")
            } else {
                prevAns = output.innerHTML;
                prevInput = input.value;
                input.value = "Answer is " + output.innerHTML;
                output.innerHTML = "";
                input.classList.toggle("fadein")
                sendtohistory();
            }
        } else if (event.target.innerHTML === "CA") {
            input.value = "";
            output.innerHTML = "";
        } else {
            output.innerHTML = eval(input.value)
        }
    })
}