

function verifcontenu(){
    console.clear();
  
  
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const etablissement = data;

      document.getElementById("annuaire").innerHTML = "";

      const idGroupe = document.getElementById("listeRecherche").value;
      const nomPersonne = document.getElementById("recherche").value;
      const annuaire = document.getElementById("annuaire");

      const groupe = data.data[idGroupe];
      
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

        if(groupe.mail != " " || groupe.telephone != " "){
          //Récupère le mail et le tel du groupe et l'ajoute à la div
          const infosGroupe ="Mail: " + groupe.mail + " / Téléphone:" + groupe.telephone;
          const emailElement = document.createElement("p");
          emailElement.textContent = infosGroupe;
          annuaire.appendChild(emailElement);
        }
        
        array.forEach(element => {
          
        });


        for (let j = 0; j < Object.keys(data.data[idGroupe].listePersonne).length; j++) {
          const personne = groupe.listePersonne[j];
          console.log(personne);

          if (personne.nom.toLowerCase().includes(nomPersonne.toLowerCase())) {

            //Récupère et ajoute le Nom à la Div
            const nomElement = document.createElement("h3");
            nomElement.textContent = personne.nom;
            annuaire.appendChild(nomElement);

            //Récupère et ajoute le Mail et le Téléphone de la personne à la div
            const info = "Mail: " + personne.email + " / Téléphone: " + personne.telephone;
            const emailElement = document.createElement("p");
            emailElement.textContent = info;
            annuaire.appendChild(emailElement);


          }
        }




      }else{
        console.log("error");
      }

    });
}