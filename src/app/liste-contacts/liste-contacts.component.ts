import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {

  // Nos attributs

  prenom = "";
  nom = "";
  email = "";
  telephone = "";
  tableauContact: any = [];
  contactStorage = [];
  db: any;
  ajoutEmail: any;
  ajoutNom: any;
  ajoutPrenom: any;
  ajoutTel: any;
  description: any;
  tableauDonneesAjout: any;

  


  // nos méthodes
  

  ajoutContactStorage(){
      const prenom = this.prenom;
      const nom = this.prenom;
      const email = this.email;
      const telephone = this.telephone;

      this.tableauContact = this.contactStorage;


      // Récupérer le tableau d'objets du Local Storage ou créer un tableau vide s'il n'existe pas encore
      const contactStorage = JSON.parse(localStorage.getItem('contactStorage') || '[]');

      // Ajouter un nouvel objet au tableau avec les valeurs des champs input
      contactStorage.push({
        email,
        prenom,
        nom,
        telephone
      });


      // Stocker le tableau d'objets mis à jour dans le Local Storage
      localStorage.setItem('contactStorage', JSON.stringify(contactStorage));
      console.log(contactStorage);

      const data: any = [];
      localStorage.setItem('contactStorage', JSON.stringify(data));

      // const storeData = JSON.parse(localStorage.getItem(contactStorage));

      this.tableauContact = localStorage.getItem('contactStorage');

      // console.warn(this.tableauContact)

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const donneesStorage: any = localStorage.getItem('tableauAjout');

    this.tableauDonneesAjout = JSON.parse(donneesStorage);
    console.warn(donneesStorage)
    console.warn(this.tableauDonneesAjout)


  }

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    
    // const searchTerm = this.valeurRecherchee;
    // const results = this.db.filter((item: any) => item === searchTerm);
    // console.warn(results);


  
  // méthode ajouter au tableau
  ajoutContStorage() {

    const ajoutDonnees = {
      Prenom: this.ajoutPrenom,
      Nom: this.ajoutNom,
      Email: this.ajoutEmail,
      Tel: this.ajoutTel,
      description: this.description
    }

    // Récupérer les données existantes au niveau du local Storage
    const tableauStorage = JSON.parse(localStorage.getItem('tableauAjout') || '[]');

    // Ajouter les nouvelles données au tableaux
    tableauStorage.push(ajoutDonnees);

    this.sweet('success', 'Bravo', 'Contact ajouté avec succés')

    // Le tableau mis à jour
    localStorage.setItem('tableauAjout', JSON.stringify(tableauStorage));

    console.log(tableauStorage)
  }

  sweet(icone: any, titre: any, text: any) {
    Swal.fire({
      title: titre,
      text: text,
      icon: icone,
    })
  }


}
