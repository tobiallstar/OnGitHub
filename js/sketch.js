

var words = ["Failure", "Success", "Creativity", "Resilience", "Execution", "Innovation","Dominate","Strive","Prosper","Greatness","Consistancy","Work","Integrity","Grit","Achievement","Courage","Planning","Winning","Conquer"];
var scrambledWords = [];  // ["efaliur","essucse","tretviiacy","inceilresi","xceenutio","nnniatovon","amoidten","rivtse","oppsre", "rtegasens","tccnosaisny","owkr","nityegrit","RITG"];
var xArray = [];
var x = 10;


var y3  = 10;
	  		



// ===========================================================
//						SETUP
// ===========================================================
function setup()
 {
 
	  createCanvas(1200, 1200);
	  noStroke();
	  background(0, 0, 0);
	  frameRate(5);
	 


	    var word, scrambledWord;
	    var a, n;
	  	for (var k=0; k<words.length; k++)
	  	{
		  		word = words[k];

		  		var firstLetter = word.charAt(0);
		  		var lastLetter = word.charAt(word.length-1);
				a = [];
		        for (w=1; w<word.length-1; w++)
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
		        scrambledWords.push(firstLetter + scrambleWord + lastLetter);



		        // a = word.split("");
		        // a = [];
		        // for (w=0; w<word.length; w++)
		        // {
		        // 	a.push(word.charAt(w));
		        // }

		        // n = a.length;

		        // for(var i = n - 1; i > 0; i--) 
		        // {
			       //  var j = Math.floor(Math.random() * (i + 1));
			       //  var tmp = a[i];
			       //  a[i] = a[j];
			       //  a[j] = tmp;
		        // }

		        // scrambleWord =  a.join("");
		        // scrambledWords.push(scrambleWord);

		} // k

		
// words = jQuery.grep(words, function(value) {
// 	return value! = removeItem;
// }

};  // SETUP



// ===========================================================
//						DRAW
// ===========================================================
var draw = function() 
{
	background(0, 0, 0);
	fill(0, 200, 0);
	textSize(65);
	//frameRate(2);	
	

    // Set up one word VERTICALLY from the scrambled array.
   for (var i=0; i<scrambledWords.length; i++) {
	   for(var j=0; j<scrambledWords[i].length; j++) {		
		 var result = scrambledWords[i].charAt(j);
		 text(result, xArray[i], y3+60*j);
	   }
	}



    // Drop down
    y3 = y3 + 10;
    if (y3 > 799) { 	
    	xArray = [];
    	for (x=0; x<scrambledWords.length; x++)
    	{   

    		var found;
    		var r,k;
    		do{
    			found = false;
    			r = random(0,20);
    			k = Math.round(r) * 60;
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

    // Get answer - Tell if right or wrong
}   // DRAW



