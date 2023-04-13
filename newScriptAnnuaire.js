

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

      const groupe = data.data[idGroupe-1];
      

      if(groupe && idGroupe != "0"){
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
        


        for (let j = 0; j < Object.keys(groupe.listePersonne).length; j++) {
          const personne = groupe.listePersonne[j];
          
          if (personne.nom.toLowerCase().includes(nomPersonne.toLowerCase())) {

            //Récupère et ajoute le Nom à la Div
            const nomElement = document.createElement("h3");
            nomElement.textContent = personne.nom;
            annuaire.appendChild(nomElement);

            //Récupère et ajoute le Mail et le Téléphone de la personne à la div
            const info = "Mail: " + personne.mail + " / Téléphone: " + personne.telephone;
            const emailElement = document.createElement("p");
            emailElement.textContent = info;
            annuaire.appendChild(emailElement);


          }
        }


      }else{
        if(groupe == undefined && idGroupe != "0"){

          for (let i = 0; i < Object.keys(data.data).length; i++) {
            const groupe = data.data[i];
            console.log(groupe);
            //Récupère et ajoute le nom du Groupe
            const groupeNom = document.createElement("h2");
            groupeNom.textContent = groupe.nom;
            annuaire.appendChild(groupeNom);

            var k=0;

            console.log("");

            for (let j = 0; j < Object.keys(groupe.listePersonne).length; j++) {
              const personne = groupe.listePersonne[j];

              if (personne.nom.toLowerCase().includes(nomPersonne.toLowerCase())) {
                //Récupère et ajoute le Nom à la Div
                const nomElement = document.createElement("h3");
                nomElement.textContent = personne.nom;
                annuaire.appendChild(nomElement);

                //Récupère et ajoute le Mail et le Téléphone de la personne à la diuv
                const info = "Mail: " + personne.email + " / Téléphone: " + personne.telephone;
                const emailElement = document.createElement("p");
                emailElement.textContent = info;
                annuaire.appendChild(emailElement);
                
              }else{
                k++;
              }
            }
            //Vérifier si aucune personne ne contient les caractères de nomPersonne pour supprimer le Titre du groupe
            //"Si tout le groupe est vide, supprimer le titre du groupe"
            if(Object.keys(groupe.listePersonne).length == k){
              const dernierElement= annuaire.lastChild;
              annuaire.removeChild(dernierElement);

            }
          }
          
        }

      }

    });
}