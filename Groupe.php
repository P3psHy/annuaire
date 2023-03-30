<?php
class Groupe
{
    // déclaration d'une propriété
    private $id;
    private $nom;
    private $mail;
    private $telephone;
    private $listePersonne;

    public function getId() {
        return $this->id;
    }
    public function setId($newId) {
        $this->id = $newId;
    }

    public function getNom() {
        return $this->nom;
    }
    public function setNom($newNom) {
        $this->nom = $newNom;
    }

    public function getMail() {
        return $this->mail;
    }
    public function setMail($newMail) {
        $this->mail = $newMail;
    }

    public function getTel() {
        return $this->telephone;
    }
    public function setTel($newTel) {
        $this->telephone = $newTel;
    }

    public function addPersonne($personne){
        $this->listePersonne;
    }





    
}
?>