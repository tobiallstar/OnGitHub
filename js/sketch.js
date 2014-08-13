function setup() {
  // creates the black canvas of the code and sets the speed for the codes animation
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('myCanvas');
  noStroke();
  background(0, 0, 0);
  frameRate(15);

}


// // coordinates each set x,y value in a variable so it'll be pre-implemented and easily recognizable
var x = 10;
var y = 10;
var x2 = 20;
var y2 = 10;
var x3 = 30;
var y3 = 10;

//var str=""
var enter= prompt("enter")
var arrayOfLetters = enter.split("")



//var arrayOfLetters = ["c", "h", "i", "c", "k", "e", "n"];

//draws the line of text that drops down the canvas in different x,y coordinates, each text is stacked on top of each other and will be set on each 20th line of the y axis

var draw = function() {

	background(0, 0, 0);
	for(var i=0; i<arrayOfLetters.length; i++) {
		 var result = arrayOfLetters[i];
	     text(result, x3, y3+20*i);
	     frameRate(5);
	}
    y3 = y3 + 10;
    if (y3 > 399) {
	 	x3 = random(110,200);
	 	y3= 10;

	 }

    
	text("0", x, y);
	text("1", x, y + 20);
 	text("0",x, y + 40);
	text("0",x, y+ 60);
	text("0", x, y + 80);
	text("0", x, y + 100);
	text("1", x, y +120);



// the code below makes the text restart from the top after reaching the bottom
	y+=10;
	if ( y > 399 ) {
		x = random(10,100);
		y = 10;


	}
	 // same as line 19 
	 text("2", x2, y2);
	 text("3", x2, y2+20);
	 text("x", x2, y2+40);
	 text("7", x2, y2+60);
	 text("F", x2, y2+80);
	 text("0", x2, y2+100);
	 text("k", x2, y2+120);
	 text("b", x2, y2+140);
	 text("0", x2, y2+160);
	 text("1", x2, y2+180);
	 text("1", x2, y2+200);
	 y2+=10;
	 //same as line 30
	 if ( y2 > 399 ) {
	 	x2= random(210,299);
	 	y2 = 20;
	 }
	 // text("z", x3, y3);

	 // y3+=10
	 // 




	}







