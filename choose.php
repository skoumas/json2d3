<?
 
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$times = null;
$number = null;

if (isset($_POST["number"]))
{

	 
	$number = $_POST["number"];
	$success = false;
	if (is_int((int)$number))
	{
		$json_string = 'data.json';
		$jsondata = file_get_contents($json_string);
		$json = json_decode($jsondata,true);
		foreach($json as $key=>$value)
		{
			if ($value["number"] == $number)	
				{
					$times = $json[$key]["times"]= (int) $value["times"] + 1 ;
					
				}
		}


		$output = json_encode($json,true);
	 
		file_put_contents($json_string, $output);
		$success = true;
	}


} 
else
	$success = false;

 	echo (json_encode(["success"=>$success,"number"=>$number,"times"=>$times]));



?>