var words = ["failure", "success", "creativity", "resilience", "execution", "innovation","dominate","strive","prosper","greatness","consistancy","work","integrity","GRIT","achievement","courage","planning","winning","conquer"];
var scrambledWords = [];  // ["efaliur","essucse","tretviiacy","inceilresi","xceenutio","nnniatovon","amoidten","rivtse","oppsre", "rtegasens","tccnosaisny","owkr","nityegrit","RITG"];
var xArray = [];
var x = 10;
var y3  = 10;
	  		

function setup()
 {
 
	  createCanvas(600, 600);
	  noStroke();
	  background(0, 0, 0);
	  frameRate(10);
	 

	    var word, scrambledWord;
	    var a, n;
	  	for (var k=0; k<words.length; k++)
	  	{
		  		word = words[k];

		        // a = word.split("");
		        a = [];
		        for (w=0; w<word.length; w++)
		        {
		        	a.push(word.charAt(w));
		        }

		        n = a.length;

		        for(var i = n - 1; i > 0; i--) 
		        {
			        var j = Math.floor(Math.random() * (i + 1));
			        var tmp = a[i];
			        a[i] = a[j];
			        a[j] = tmp;
		        }

		        scrambleWord =  a.join("");
		        scrambledWords.push(scrambleWord);

		} // k



  	}  // SETUP


    	// for (var x=0; x<scrambled.length; x++)
    	// {
   		// var r = random(0,20);
    	// 	console.log("r = " + r);
    	// 	k = Math.round(r) * 20;
    	// 	console.log("k = " + k);
    	// 	xArray.push(k);		
    	// }

 // var y3=10;
 // var x3=30;

  // SETUP!!
// function keyTyped () {
//  	if (key === 'a') {
//  prompt("TEST");
// }

//  
// // 	function removeScrambled() {
// if prompt() = 
// 	}
// }                                                   


// // coordinates each set x,y value in a variable so it'll be pre-implemented and easily recognizable


// var enter= prompt("Enter")
// var arrayOfLetters = enter.split("")


var draw = function() 
{
	background(0, 0, 0);
	fill(0, 200, 0);
	textSize(15);
	//frameRate(2);	
	

    // Set up one word VERTICALLY from the scrambled array.
   for (var i=0; i<scrambledWords.length; i++) {
	   for(var j=0; j<scrambledWords[i].length; j++) {		
		 var result = scrambledWords[i].charAt(j);
		 text(result, xArray[i], y3+20*j);
	   }
	}



    // Drop down
    y3 = y3 + 10;
    if (y3 > 399) { 	
    	xArray = [];
    	for (x=0; x<scrambledWords.length; x++)
    	{   

    		var found;
    		var r,k;
    		do{
    			found = false;
    			r = random(0,20);
    			k = Math.round(r) * 20;
    			for (var t=0; t<xArray.length; t++)
    			{
    				if (xArray[t]===k)
    					found = true;
    			}
    		} while(found===true); 
			xArray.push(k);		
    	}
    	// x3 = random(0,400);	
    	// x4 = random(0,400);	    	
	 	y3 = 10;
	 }



};




