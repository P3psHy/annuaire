<?php
require "connection.php" ;

$sqlPersonne=$connection ->prepare('SELECT * FROM personnes ORDER BY groupeId');
$sqlPersonne->execute();
$lignePersonne = $sqlPersonne->fetchall();

$sqlGroup=$connection ->prepare('SELECT * FROM groupes');
$sqlGroup->execute();
$ligneGroup = $sqlGroup->fetchall();

$arrayGroupes = [];
//$arrayPersonne[] = $objectPersonne;

foreach($ligneGroup as $groupe){

    $objectGroupe = new stdClass();
    $objectGroupe->id = $groupe['id'];
    $objectGroupe->nom = $groupe['nom'];
    $objectGroupe->telephone = $groupe['telephone'];
    $objectGroupe->mail = $groupe['mail'];
    $objectGroupe->listePersonne = [];
    
    foreach($lignePersonne as $personne){
        if($personne['groupeId'] == $groupe['id']){
            $objectPersonne = new stdClass();
            $objectPersonne->id = $personne['id'];
            $objectPersonne->nom = $personne['nom'];
            $objectPersonne->mail = $personne['mail'];
            $objectPersonne->telephone = $personne['telephone'];
            $objectPersonne->groupeId = $personne['groupeId'];

            array_push($objectGroupe->listePersonne, $objectPersonne);
        }
    }
    array_push($arrayGroupes, $objectGroupe);

}

var_dump($arrayGroupes);

$json = json_encode(array('data' => $arrayGroupes));

//write json to file
if (file_put_contents("data.json", $json))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";




echo "<a href=\"index.php\"><button>Retour index</button></a>";
?>

