<html>
<head>
	<title> json2d3 </title> 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
	<script src="http://d3js.org/d3.v3.min.js"></script>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">

 
<div class="well">
	<h1><a href="http://www.skoumas.com/lab/json2d3/"> json2d3 </a> </h1>
	<p> The JSON2D3 application converts JSON data into a horizontal chart using the d3 javascript library and can be dynamically updated when the user inputs a new value.. </p>

</div>

<div class="row">

<div class="col col-lg-8">
	<svg id="theSvg"></svg>
</div>


<div class="col col-lg-4">
<div class="panel panel-default " id="rightBox">
  <div class="panel-heading">Select a number</div>
  
	 
  	<div class="panel-body" id="success" style="opacity:0;display:none;"> 
  		
  	</div>

  	<div class="panel-body" id="theform"> 
	<form name="theform" class="form-horizontal" method="post" >
	<fieldset>

	 

	<!-- Multiple Radios (inline) -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="radios"> </label>
	  <div class="col-md-4"> 
	    <label class="radio-inline" for="number-0">
	       <input type="radio" name="number" id="number-0" value="1" >
	       1
	    </label> 
	    <label class="radio-inline" for="number-1">
	      <input type="radio" name="number" id="number-1" value="2">
	      2
	    </label> 
	    <label class="radio-inline" for="number-2">
	      <input type="radio" name="number" id="number-2" value="3">
	      3
	    </label> 
	    <label class="radio-inline" for="number-3">
	      <input type="radio" name="number" id="number-3" value="4">
	      4
	    </label> 
	    <label class="radio-inline" for="number-4">
	      <input type="radio" name="number" id="number-4" value="5">
	      5
	    </label> 
	    <label class="radio-inline" for="number-5">
	      <input type="radio" name="number" id="number-5" value="6">
	      6
	    </label> 
	    <label class="radio-inline" for="number-6">
	      <input type="radio" name="number" id="number-6" value="7">
	      7
	    </label> 
	    <label class="radio-inline" for="number-7">
	      <input type="radio" name="number" id="number-7" value="8">
	      8
	    </label> 
	    <label class="radio-inline" for="number-8">
	      <input type="radio" name="number" id="number-8" value="9">
	      9
	    </label> 
	    <label class="radio-inline" for="number-9">
	      <input type="radio" name="number" id="number-9" value="0">
	      0
	    </label>
	  </div>
	</div>

	<!-- Button -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="submit"></label>
	  <div class="col-md-4">
	    <button id="submit" name="submit" type="button" class="btn btn-primary">Submit</button>
	  </div>
	</div>

	</fieldset>
	</form>



  </div>
</div>

</div>

</div>


<script src="functionality.js"></script>
<script src="dataVisualization.js"></script>





 
<hr>
<div align="center">
<a href="http://www.skoumas.com/?wpdmdl=22368">  Get Source Code </a> | <a href="http://www.github.com/skoumas/json2d3">  Github </a> |
Developed by <a href="http://www.skoumas.com">skoumas</a>
</div>
 </div>
</body>


</html>