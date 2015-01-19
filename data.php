<?

 
$json_string = 'data.json';
$jsondata = file_get_contents($json_string);

$obj = json_decode($jsondata,true);
 
echo($jsondata);
?>