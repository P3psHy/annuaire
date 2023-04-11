

function verifcontenu(){
    console.clear();
  
  
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const etablissement = data;

      const nomGroupe = document.getElementById("listeRecherche").value;
      const nomPersonne = document.getElementById("recherche").value;
      const annuire = document.getElementById("annuaire");

      const groupe1 = etablissement.data.find(groupe => groupe.id === nomGroupe);

      const noms = Object.values(listePersonne).map(personne => personne.nom);
      
      console.log(noms);

      

    });
}