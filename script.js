let previous = null;
let sign = null;
let current = "";
let decimal = null;

toDisplay = document.querySelector("#display");

rest = document.querySelector("#rest");
rest.addEventListener("click", handle);

function display(){
    let text = "";
    if(previous) text+=Math.round(previous*100)/100;
    if(sign && sign!=="=") text+= (" "+sign);
    text+=current;
    if(text === "") text="0";
    toDisplay.textContent = text;
}
function handle(e){
    if(e.target.className.includes("ac")){
        previous=null;
        sign=null;
        current="";
        decimal=null;
        display();
        return;
    }
    if(e.target.className.includes("num")){
        let curtext = e.target.textContent;
        if(curtext==="."){
            if(decimal) return;
            decimal = true;
        }
        current+=curtext;
    }
    if(e.target.className.includes("op")){
        if(e.target.textContent !== "=") decimal=null;
        if(sign !== null) operate();
        if(previous === null){
            if(+current === 0) return;
            else previous = +current;
            current="";
        }
        sign = e.target.textContent;
    }
    display();
}
function operate(){
    switch(sign){
        case "+":
            previous+= +current;
            break;
        case "-":
            previous-= +current;
            break;
        case "*":
            previous*= +current;
            break;
        case "/":
            previous/= +current;
            break;
    }
    current="";
}

