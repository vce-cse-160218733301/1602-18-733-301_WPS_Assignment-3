<?php 
function endsWith($string, $endString) 
{ 
	$len = strlen($endString); 
	if ($len == 0) { 
		return true; 
	} 
	return (substr($string, -$len) === $endString); 
} 
$states="Mississippi Alabama Texas Massachusetts Kansa";
$states=explode(" ",$states);
$arr=array();
foreach($states as $s)
{	
	if(endsWith("$s","xas")) 
		array_push($arr,$s); 
  }
echo $arr[0];
?> 