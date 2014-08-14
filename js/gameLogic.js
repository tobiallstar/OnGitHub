$(document).ready(function()
{
	var removeItem = function() 
	{

		var found = false;
		for(var i = 0; i<words.length; i++) 
		{
			if( $("#guess").val()=== words[i] )
		    {  
    			scrambledWords[i] = "";
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
