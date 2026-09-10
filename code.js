const width = document.getElementById("player").offsetWidth;
const height = document.getElementById("player").offsetHeight;
const allOverlays = document.getElementsByClassName("overlay");
const title = document.getElementById("title");
const leftTeam = document.getElementById("leftTeam");
const rightTeam = document.getElementById("rightTeam");

let playerWidth = String(width+"px"); 
let playerHeight = String(height+"px");

for ( let i = 0; i < allOverlays.length; i++) {
    allOverlays[i].style.width = playerWidth; 
    allOverlays[i].style.height = playerHeight; 
}

title.onclick = function changeText() {
    title.innerHTML = "Volleyball";
}

console.log(title.innerText);

leftTeam.onclick = function winner() {
    if (title.innerText == "Volleyball") {
        leftTeam.innerHTML = "this team wins"
    }
    else {
        rightTeam.innerHTML = "this team wins"
    }
}