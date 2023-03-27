

function verifcontenu(){
  console.clear();


  
  fetch('annuaireTest.json')
  .then(response => response.json())
  .then(data => {
    const etablissement = data;


      document.getElementById("annuaire").innerHTML = "";


      const nomGroupe = document.getElementById("listeRecherche").value;
      const nomPersonne = document.getElementById("recherche").value;

      const emailsDiv = document.getElementById("annuaire");
    
      const groupe1 = etablissement.groupes.find(groupe => groupe.id === nomGroupe);
      console.log(groupe1.id)
      if (groupe1) {

        const groupeNom = document.createElement("h2");
        groupeNom.textContent = groupe1.nom;
        

        emailsDiv.appendChild(groupeNom);

        if(groupe1.mail != " " || groupe1.telephone != " "){
          //Récupère le mail et le tel du groupe et l'ajoute à la div
          const infosGroupe ="Mail: " + groupe1.mail + " / Téléphone:" + groupe1.telephone;
          const emailElement = document.createElement("p");
          emailElement.textContent = infosGroupe;
          emailsDiv.appendChild(emailElement);
        }
        
        
        for (let j = 0; j < groupe1.personnes.length; j++) {
          const personne = groupe1.personnes[j];

          if (personne.nom.toLowerCase().includes(nomPersonne.toLowerCase())) {

            //Récupère et ajoute le Nom à la Div
            const nomElement = document.createElement("h3");
            nomElement.textContent = personne.nom;
            emailsDiv.appendChild(nomElement);

            //Récupère et ajoute le Mail et le Téléphone de la personne à la div
            const info = "Mail: " + personne.email + " / Téléphone: " + personne.telephone;
            const emailElement = document.createElement("p");
            emailElement.textContent = info;
            emailsDiv.appendChild(emailElement);


          }
        }




      }else{
        console.log("here");
          if(groupe1 == null){
            for (let i = 0; i < etablissement.groupes.length; i++) {
              const groupe = etablissement.groupes[i];

              //Récupère et ajoute le nom du Groupe
              const groupeNom = document.createElement("h2");
              groupeNom.textContent = groupe.nom;
              emailsDiv.appendChild(groupeNom);

              var k=0;

              for (let j = 0; j < groupe.personnes.length; j++) {
                const personne = groupe.personnes[j];

                if (personne.nom.toLowerCase().includes(nomPersonne.toLowerCase())) {
                  //Récupère et ajoute le Nom à la Div
                  const nomElement = document.createElement("h3");
                  nomElement.textContent = personne.nom;
                  emailsDiv.appendChild(nomElement);

                  //Récupère et ajoute le Mail et le Téléphone de la personne à la diuv
                  const info = "Mail: " + personne.email + " / Téléphone: " + personne.telephone;
                  const emailElement = document.createElement("p");
                  emailElement.textContent = info;
                  emailsDiv.appendChild(emailElement);
                  
                }else{
                  k++;
                }
              }
              //Vérifier si aucune personne ne contient les caractères de nomPersonne pour supprimer le Titre du groupe
              //"Si tout le groupe est vide, supprimer le titre du groupe"
              if(groupe.personnes.length == k){
                const dernierElement= emailsDiv.lastChild;
                emailsDiv.removeChild(dernierElement);

              }
            }
            
          }

      }
  })
  .catch(error => console.error(error))
    
}
 


 

function addData(){
  let annuaire;
  fetch('annuaire.json')
  .then(response => response.json())
  .then(data => {
    annuaire = data;
    console.log("test1");

    var groupeTest = {
      "nom": "Service Test",
      "mail":" ",
      "telephone":" ",
      "personnes": []
    }

    annuaire.groupes.push(groupeTest);

    var personneTest = {
      "nom": "Test",
      "mail": "Test",
      "tel": "Test"
    }

    annuaire.groupes[10].personnes.push(personneTest)

    console.log(JSON.stringify(annuaire));
  })
  .catch(error => console.error(error));


  

function modifyData(){
  let annuaire;
  fetch('annuaire.json')
  .then(response => response.json())
  .then(data => {
    annuaire = data;
    console.log(annuaire.etablissement);
    annuaire.etablissement = 'test';

    


    console.log(annuaire.etablissement);
  })
  .catch(error => console.error(error))


  
}


}