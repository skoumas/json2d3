// JSON2D3
// George Papanikolaou 2015
// www.skoumas.com
//-------------------------

d3.select("#voteAgain").on("click",function(d){
	voteAgain();
}); 


function voteAgain()
{


	for( i = 0; i < document.theform.number.length; i++ )
	{  
		document.theform.number[i].checked = false;   	 
	}

	d3.select("#success")
	    .transition()
	    .style("opacity","0")
		.text("") 
	    .each("end", function() {

	    	d3.select(this).style("display","none")

	    	d3.select("#theform").style("display","block")
		   						 .style("opacity","0");
		    d3.select("#theform")
		            .transition()
		            .style("opacity","1");
		        })


}

d3.select("#submit").on("click",function(d){
 
selectedValue = null;
	for( i = 0; i < document.theform.number.length; i++ )
	{
		if( document.theform.number[i].checked == true )
			selectedValue = document.theform.number[i].value;
	}
 
 if (selectedValue==null)
 	alert("Please select a value");
 
d3.xhr("choose.php")
   
    .post( JSON.stringify({"number": selectedValue}) , function(error, data) {
    
    	 
    	  data = (data.responseText);
    	  data = JSON.parse(data );
           if (data.success)
           {
            d3.select("#theform")
		            .transition()
		            .style("opacity","0")
		            .each("end", function() 
		            {

			        	d3.select(this).style("display","none")

			        	d3.select("#success").style("display","block")
								 .style("opacity","0")
								 .append("div")
								 .attr("class","alert alert-success")
								 .html('You chose the number '+selectedValue+'.<br> Thank you for voting<br>')
								 .append("a")
								 .attr("href","#")
								 .attr("id","voteAgain")
								 .attr("onClick","voteAgain()")
								 .html("Vote Again");
					   						  
					    d3.select("#success")
					            .transition()
					            .style("opacity","1")

					     renderData();

 
		    		});
      
           }
           else
           		d3.select("#error").style("display","block");
           
    });
});