if (score === undefined){
    var score = 0;
}
console.log(screen.width);
document.querySelector("svg").setAttribute("onclick","repos();");
var h1 = document.querySelector("h1");
h1.innerHTML = "GRID SHOOTER ----- Score = " + score;
var target = document.getElementById("targetl");


function repos(){
    var xPos = Math.floor(Math.random() * 4 + 1);
    var yPos = Math.floor(Math.random() * 2 + 1);
    if (yPos > 2){

        var yPosEnd = yPos - 1; 
    } else {
        var yPosEnd = yPos + 1;
    }
        
    if (xPos > 4){
        var xPosEnd = xPos - 1; 
    } else {
        var xPosEnd = xPos + 1;
    }
    
    // target.style.gridArea = `${yPos} / ${xPos} / ${yPosEnd} / ${xPosEnd}`; 
    console.log(target.style.gridArea);
    target.style.order = Math.floor(Math.random() * 8 + 1);
    console.log(target.style.order);
    score++;
    h1.innerHTML = "GRID SHOOTER ----- Score = " + score;

}