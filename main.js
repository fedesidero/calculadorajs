const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result")

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear"){
            display.innerText = "";
            result.innerText = "";
        } else if (item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
            result.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText)
            result.innerText = "";
        } else if (display.innerText == "" && item.id == "equal"){
            display.innerText = "Empty"
            setTimeout(() => (display.innerText = ""), 2000);
        } else{
            display.innerText += item.innerHTML;
        }
        if (display.innerText != "" && item.id != "equal"){
            result.innerText = eval(display.innerText);
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active")
    isDark = !isDark
}

const countDecimals = function(value){
    if (Math.floor(value) !== value){
        return value.toString().split(".")[1].length || 0;
    } else {
        return 0;
    }
}