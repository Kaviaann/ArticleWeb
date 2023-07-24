const body = document.body;
const wTh = document.getElementById("wTheme");
const bTh = document.getElementById("bTheme");

function bTheme(){
    body.style.backgroundColor = "hsl(0, 2%, 12%)";
    body.style.color = "white";
    document.getElementById("Pcontainer").style.borderColor = "white";
    document.getElementById("Maincontainer").style.borderColor = "white";
    document.getElementById("Lastcontainer").style.borderColor = "white";
}

function wTheme(){
    body.style.backgroundColor = "white";
    body.style.color = "black";
    document.getElementById("Pcontainer").style.borderColor = "black";
    document.getElementById("Maincontainer").style.borderColor = "black";
    document.getElementById("Lastcontainer").style.borderColor = "black";
}

wTh.onclick = function(){wTheme()};
bTh.onclick = function(){bTheme()};