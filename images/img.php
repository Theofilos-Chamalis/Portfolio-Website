<?php
if (isset($_GET['img'])) {$filename = $_GET['img'];}else{exit;}
$allowed = array('gif','png','jpg');
$ext = pathinfo($filename, PATHINFO_EXTENSION);
if(!in_array($ext,$allowed)) {exit;}
$stc = 31536000;
$ts = gmdate("D, d M Y H:i:s", time() + $stc) . " GMT";
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . basename($filename));
header('Content-Transfer-Encoding: binary');
header("Expires: $ts");
header("Cache-Control: max-age=$stc, public");
header("Pragma: cache");
ob_clean();
flush();
readfile($filename);
exit;
?>