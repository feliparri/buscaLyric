<?php
include('../librerias/rb.php');
//var_dump($_POST);
R::setup( 'mysql:host=localhost;dbname=test', 'root', '' );
$contactos = R::find('contacto', ' nombre LIKE ?', [ '%'.$_POST['valorBuscar'].'%' ] );
echo json_encode($contactos);


//insert
/*$post = R::dispense( 'contacto' );
$post->nombre = $_POST['name'];
$post->email = $_POST['email'];
$post->massage = $_POST['massage'];
$id = R::store( $post );*/

//$contactos= R::find( 'contacto' );

/*foreach ($contactos as $key => $contacto) {
	$contacto->email."\n";
}*/
//echo "registro ".$id." creado!!";
//echo "Gracias!!\n lo contactaremos cuanto antes.";
?>