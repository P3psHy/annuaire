

function verifcontenu(){
    console.clear();
  
  
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const etablissement = data;

      const idGroupe = document.getElementById("listeRecherche").value;
      const nomPersonne = document.getElementById("recherche").value;
      const annuire = document.getElementById("annuaire");

      const groupe = data.data[idGroupe].listePersonne;

      



      console.log(noms);

      

    });
}