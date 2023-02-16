const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const resultdisplay = document.querySelector("#result")
var result
var result2
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear"){
            display.innerText = "";
            resultdisplay.innerText = "";
        } else if (item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
            resultdisplay.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal"){
            result = eval(display.innerText)
            result2 = Number((result).toFixed(10))
            display.innerText = result2
            resultdisplay.innerText = "";
        } else if (display.innerText == "" && item.id == "equal"){
            display.innerText = "Empty"
            setTimeout(() => (display.innerText = ""), 2000);
        } else{
            display.innerText += item.id;
        }
        if (display.innerText != "" && item.id != "equal"){
            result = eval(display.innerText)
            result2 = Number((result).toFixed(2))
            resultdisplay.innerText = result2
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const bg = document.querySelector(".body");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active")
    bg.classList.toggle("dark")
    isDark = !isDark
}

const countDecimals = function(value){
    if (Math.floor(value) !== value){
        return value.toString().split(".")[1].length || 0;
    } else {
        return 0;
    }
}