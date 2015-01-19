// JSON2D3
// George Papanikolaou 2015
// www.skoumas.com
//-------------------------


var width = 480;
var height = 440;
var line;
var lastMaxTimes=0;
 
var renderedOnce = false;
 
function renderData(theArray)
{
	d3.json("data.php",function(theArray)
	{
		var maxTimes = d3.max(theArray,function(d){return d.times});
	 
		var HeightScale = d3.scale.linear()
						   .domain([0,maxTimes])
						   .range([0,height-20]);

		var widthAxisScale = d3.scale.linear()
						   .domain([0,maxTimes])
						   .range([width-20,0]);

	 
		var timesAxisScale = d3.scale.linear()
							.domain([0,maxTimes])
							.range([height-20,0]);	


		var timesAxis = d3.svg.axis()
					 .ticks(10)
					 .tickSize(1)
					 .orient("left")
					 .tickFormat(d3.format("d"))
					 .scale(timesAxisScale);

		
 
		var canvas =  d3.select("#theSvg")
				 		.attr("class","theSvg")
						.attr("width",width)
						.attr("height",height);
						 

		var bars = canvas.selectAll("rect").data(theArray);
		var texts = canvas.selectAll("text").data(theArray);
		var textsTimes = canvas.selectAll("text").data(theArray);
 
 
 
		if (!renderedOnce )
		{
  			renderedOnce = true;
 		 
			//Enter
			bars.enter()
			 	.append("rect")
			 	.attr("height",0)
			 	.attr("width", (width/20))
			 	.attr("fill","#ddd")
			 	.attr("x",function(d,i){ return 10 + i*(width/10) ; })
			 	.attr("y", height - 20) 
				.transition() 
			 		.duration(function(d,i){return i*100})
			 		.attr("y", function(d) { return (height - 20) - HeightScale(d.times);  })
			 		.attr("height", function(d) { return  HeightScale(d.times);		})
			 		.text(function(d){return d.number;});
		
			textsTimes.enter()
				.append("text")
			    .attr("x",function(d,i){ return 18 + i*(width/10) ; })
			    .attr("y", function(d,i){ 
			    	if (HeightScale(d.times) < 30)
						return height - 60; 
			    	else	
			    		return height - 30 - HeightScale(d.times); 
			    })
			    .style("font-size", "10px")
			    .style("font-weight", "")
	      		.attr("dy", ".35em")
			    .attr("fill","#000")
			    .text(function(d,i){return d.times}) ;
		}	
		//UPDATE
		else
		{
			d3.select("#timesAxis").remove();
			bars.transition() 
		 		 
		 		.attr("y", function(d) { return (height - 20) - HeightScale(d.times);  })
		 		.attr("height", function(d) { return  HeightScale(d.times);		})
		 		.text(function(d){return d.number;}); 


			textsTimes.transition() 
		 		.duration(function(d,i){return i*100})
		 		.attr("x",function(d,i){ return 18 + i*(width/10) ; })
			    .attr("y", function(d,i){ 
			    	if (HeightScale(d.times) < 30)
						return height - 60; 
			    	else	
			    		return height - 30 - HeightScale(d.times); 
			    })
		 		.text(function(d){return d.times;}); 
		}

 

		texts.enter()
			.append("text")
		    .attr("x",function(d,i){ return 18 + i*(width/10) ; })
		    .attr("y", height - 30)
		    .style("font-size", "12px")
		    .style("font-weight", "bold")
      		.attr("dy", ".35em")
		    .attr("fill","#000")
		    .text(function(d,i){return d.number}) ;
		 	
	 	bars.on("mouseover", function(d) {
			 
		d3.select("#lineSpecify").remove();
			
		line = canvas.append("line")
			.attr("id","lineSpecify")
			.attr("x1",d3.select(this).attr("x"))
			.attr("y1",height - 20- d3.select(this).attr("height"))
			.attr("x2",0)
			.attr("y2",height - 20 - d3.select(this).attr("height"))
			.attr("stroke-width",1)
			.attr("stroke","#ddd");
    	})

    	bars.on("mouseout", function(d) {
			line.remove();
    	})
		 	
		canvas.append("g")
			  .attr("id","timesAxis")
			   .attr("class","axis")
			  .attr("transform","translate(0,0 )")
			  .call(timesAxis);
	
	});
}

renderData();