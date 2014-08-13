$(document).ready(function()
{
	var removeItem = function() 
	{
		console.log($("#guess").val());
		var found = false;
		for(var i = 0; words.length; i++) 
		{
			if( $("#guess").val()=== words[i] )
		    {  
    			scrambledWords[i] = "";
  alert("scrambledWords[" + i + "] = " + scrambledWords[i] );
    			found = true;
    			break;
			}
		} // for i

		if (found === true) {
			alert("You Got It!!");
		} else {
			alert("Try again!");
		}
	}
	$("#enter").click(removeItem);
});
