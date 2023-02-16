const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const resultdisplay = document.querySelector("#result")
let result2
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
            result2 = eval(display.innerText)
            display.innerText = Number(result2)
            resultdisplay.innerText = "";
        } else if (display.innerText == "" && item.id == "equal"){
            display.innerText = "Empty"
            setTimeout(() => (display.innerText = ""), 2000);
        } else{
            display.innerText += item.id;
            if (item.id == Number){
                
            }
        }
        if (display.innerText != "" && item.id != "equal"){
            resultdisplay.innerText = eval(display.innerText);
        }
    }
})