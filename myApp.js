
// window.setInterval(drawCanvas, 10);
// var myx = 30;
// var myy = 30;
// var myx02 = 250;
// var myy02 = 100;
// var yChange = 5;
// var xChange = 5;
// var yChange02 = -2;
// var xChange02 = -2;

var num ;

function mouseOver(something){
  console.log(something);
}

function mouseOut(j){
  document.getElementsByClassName('smallDiv')[j].style.background = "salmon";
}

function printNum(){
  alert(num);
}

var elems = document.getElementsByClassName('smallDiv');


for (i = 0; i < elems.length; i++){
  let indexy = i;
  elems[indexy].onmouseover = function () {
    elems[indexy].style.background = 'red';
    //console.log(this.getAttribute('data-index'));
    //console.log(this);
    num = indexy;
    this.children[0].innerHTML = indexy+1;
  };
  //elems[i].setAttribute('data-index', i);
  elems[indexy].onmouseout = function () {
    elems[indexy].style.background = 'salmon';
    this.children[0].innerHTML = "";
  };
  //elems[indexy].setAttribute('data-index', i);
}

setInterval(() => {
  console.log(num);
}, 800);

var butt = document.getElementById('button01');
var bgdiv = document.getElementById('myDiv');
butt.onclick = function () {
  bgdiv.style.background === "rgb(18, 145, 248)" ? bgdiv.style.background = "slategrey" : bgdiv.style.background = "rgb(18, 145, 248)";
  document.body.style.background === "green" ? document.body.style.background = "white" : document.body.style.background = "green";
};




// var i;
// elems[0].onmouseover = function(){ elems[0].style.background = "red";};
// elems[1].onmouseover = function() { this.style.background = "red";};
// elems[2].onmouseover = function() { this.style.background = "red";};
// elems[3].onmouseover = function() { this.style.background = "red";};
// elems[4].onmouseover = function() { elems[4].style.background = "red";};

// elems[0].onmouseout = function() { this.style.background = "salmon";};
// elems[1].onmouseout = function() { this.style.background = "salmon";};
// elems[2].onmouseout = function() { this.style.background = "salmon";};
// elems[3].onmouseout = function() { this.style.background = "salmon";};
// elems[4].onmouseout = function() { elems[4].style.background = "salmon";};




//document.getElementsByClassName("smallDiv").children[i].onmouseover = function() { this.style.background = "red"; };
    
  //document.getElementsByClassName("smallDiv")[i].onmouseout = () => { document.getElementsByClassName("smallDiv")[i].style.background = "salmon"; };

//document.getElementById("myDiv").onmouseover = () => { document.getElementById("myDiv").style.background = "black";}
//document.getElementById("myDiv").onmouseout = () => {document.getElementById("myDiv").style.background = "slategray"; document.getElementById("smallDiv").style.background = "blue"}

// function drawCanvas(){
//   if(myy < 40) yChange = 5;
//   if(myy > 560) yChange = -5;
//   if(myx < 40) xChange = 5;
//   if(myx > 760) xChange = -5;

//   if(myy02 < 40) yChange02 = 2;
//   if(myy02 > 560) yChange02 = -2;
//   if(myx02 < 40) xChange02 = 2;
//   if(myx02 > 760) xChange02 = -2;

//   myx += xChange;
//   myy += yChange;
//   myx02 += xChange02;
//   myy02 += yChange02;

//   var c = document.getElementById('myCanvas');
//   c.width = 800;
//   c.height = 600;
//   c.style.position = "absolute";
//   c.style.top = "100px";
//   c.style.left = "100px";
  
//   var ctx = c.getContext('2d');
  
//   ctx.clearRect(0, 0, 400, 300);
//   ctx.beginPath();
//   ctx.arc(myx, myy,  40, 0, 2*Math.PI);
//   ctx.fillStyle = "#0000FF";
//   ctx.fill();

//   ctx.beginPath();
//   ctx.arc(myx02, myy02,  40, 0, 2*Math.PI);
//   ctx.fillStyle = "#FF0000";
//   ctx.fill();
  

//   console.log(status);

// }
//   //ctx.stroke();
  