<?php
require "connection.php" ;

$sql=$connection ->prepare('SELECT * FROM personnes');
$sql->execute();
$ligne = $sql->fetchall();


$myArray[] = $object;

foreach($ligne as $personne){

    $object = new stdClass();
    $object->id = $personne['id'];
    $object->nom = $personne['nom'];
    $object->mail = $personne['mail'];
    $object->telephone = $personne['telephone'];
    $object->groupeId = $personne['groupeId'];

    array_push($myArray, $object);

}

var_dump($myArray);



?>