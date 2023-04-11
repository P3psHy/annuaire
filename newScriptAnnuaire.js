

function verifcontenu(){
    console.clear();
  
  
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const etablissement = data;

      const idGroupe = document.getElementById("listeRecherche").value;
      const nomPersonne = document.getElementById("recherche").value;
      const annuaire = document.getElementById("annuaire");

      const groupe = data.data[idGroupe].listePersonne;
      
      // if(groupe){

      //   for (const key in groupe1) {
      //     if (groupe1.hasOwnProperty(key)) {
      //       const personne = groupe1[key];
      //       if (personne.nom.includes("Jas")) {
      //         nomsGroupe1.push(personne.nom);
      //       }
      //     }
      //   }
      
      if(groupe){
        
        const groupeNom = document.createElement("h2");
        groupeNom.textContent = groupe.nom;

        annuaire.appendChild(groupeNom);

        console.log(groupe.nom);
        console.log("Ok !");
      }else{
        console.log("error");
      }

    });
}