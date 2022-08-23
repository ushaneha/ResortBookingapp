

var text = document.getElementById("splittt")
console.log(text)
var strText = text.textContent
console.log(strText)

var splitText = strText.split("")
text.textContent = ""
for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>"
}

var char = 0
var timer = setInterval(onTick, 600)

function onTick(){
  var span = text.querySelectorAll('span')[char]
  span.classList.add('fade')
  char++
  if(char === splitText.length){
    text.text="Refresh n Relax"
    return;
   }
  }

  function complete(){
    clearTimeout(timer)
    timer = null
  }








  
var col = document.querySelectorAll("#c123")
console.log(col);
for(var i=0;i<col.length;i++){
 col[i].style.color=changeColor();
}
setInterval("changeColor()",300);
function getRandomColor(){
    var letters='9876543210ABCDEF';
    var color="#";
    for(var i=0;i<=5;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeColor(){
    input=getRandomColor();
    for(var i=0;i<col.length;i++){
        col[i].style.color=input;
    }
}


var showText = function (target, message, index, interval) {    
    if (index < message.length) { 
      target+= message[index++]; 
      setTimeout(function () { showText(target, message, index, interval); }, interval); 
    } 
  }
  
 
     showText("", "Refresh n Relax", 0, 500);    
