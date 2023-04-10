<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Json file</title>
     
</head>
<body>
    <a href="backoffice.html"><button>BackOffice</button></a>
    <h1>Liste</h1>

    <select name="listeRecherche" id="listeRecherche" onchange="verifcontenu()">
        <option value="default" selected>Sélectionez un Groupe</option>
        <option value="0">Tous</option>
        <?php
        $json = file_get_contents('data.json');
        $json_data = json_decode($json,true)['groupes'];
        
        foreach ($json_data as $groupe) {
            echo"<option value=\"".$groupe["id"]."\">".$groupe["nom"]."</option>";
        }
        ?>
    </select>
    <?php var_dump($json_data);
    ?>
    <input type="text" name="recherche" id="recherche" placeholder="Entrer le nom" onkeyup="verifcontenu()">

    <br/>

    <div id="annuaire">
        
    </div>




    <script src="scriptAnnuaire.js"></script> 
</body>
</html>