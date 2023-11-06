import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-contact',
  templateUrl: './login-contact.component.html',
  styleUrls: ['./login-contact.component.css']
})



export class LoginContactComponent{

  // Nos attributs
  prenom: string = "";
  nom: string = "";
  email: string = "";
  password: string = "";
  passwordConfirm: string = "";
  formAffiche = true;
  // tableauObjConnexion: any;
  // tableauObjSubscribe: any;


  // Nos méthodes

  inscrisMoi(){
    this.formAffiche = !this.formAffiche;
  }

  constructor(private router: Router) {}

  formLogin() {

    // console.log(this.email)
    // Effectuez ici des validations sur les données du formulaire
    if (this.email.trim() === '') {
      this.sweet('error', 'Attention', 'Renseigner votre email')
    }else if(this.password.trim() === '') {
      this.sweet('error', 'Attention', 'Renseigner le mot de passe')
    }else {
      // Les données du formulaire sont valides, redirigez l'utilisateur vers une autre page
      this.sweet('success', 'Connexion réussie', 'Bienvenue')
      this.router.navigate(['/liste']);
    }
  }

  formSubscribe() {

    // Effectuez ici des validations sur les données du formulaire
    if (this.prenom.trim() === '') {
      this.sweet('error', 'Attention', 'Renseigner votre prénom')
    }else if(this.nom.trim() === '') {
      this.sweet('error', 'Attention', 'Renseigner votre nom')
    }else if(this.email.trim() === '') {
      this.sweet('error', 'Attention', 'Renseigner votre email')
    }else if(this.password.trim() === '') {
      this.sweet('error', 'Attention', 'Renseigner le mot de passe')
    }else if(this.passwordConfirm.trim() === '' || this.passwordConfirm.trim() != this.password.trim()) {
      this.sweet('error', 'Attention', 'le mot de passe doit etre identique au premier')
    }else {
      // Les données du formulaire sont valides, redirigez l'utilisateur vers une autre page
      this.sweet('success', 'Inscription réussie', 'Connectez-vous maintenant')
      this.inscrisMoi();
      // this.email = "";
      // this.password = "";
    }

  }

  loginStorage(){
    const email = this.email;
    const password = this.password;


    // Récupérer le tableau d'objets du Local Storage ou créer un tableau vide s'il n'existe pas encore
    const tableauObjetLogin = JSON.parse(localStorage.getItem('tableauObjetLogin') || '[]');

    // Ajouter un nouvel objet au tableau avec les valeurs des champs input
      tableauObjetLogin.push({
        email,
        password,
      });

    // Stocker le tableau d'objets mis à jour dans le Local Storage
    localStorage.setItem('tableauObjetLogin', JSON.stringify(tableauObjetLogin));

    console.log("tableauObjets",JSON.stringify(tableauObjetLogin));

    // Afficher un message de confirmation
    // alert('Les valeurs ont été ajoutées au tableau d\'objets dans le Local Storage.');


    // Effacer les valeurs des champs input
    this.email = "";
    this.password = "";

    const cle = localStorage.getItem(email);
    console.log(cle);

    
  }


  subscribeStorage(){

    const prenom = this.prenom;
    const nom = this.nom;
    const email = this.email;
    const password = this.password;
    const passwordConfirm = this.passwordConfirm;


    // Récupérer le tableau d'objets du Local Storage ou créer un tableau vide s'il n'existe pas encore
    const tableauObjetSubscribe = JSON.parse(localStorage.getItem('tableauObjetSubscribe') || '[]');

    // Ajouter un nouvel objet au tableau avec les valeurs des champs input
      tableauObjetSubscribe.push({
        prenom,
        nom,
        email,
        password,
        passwordConfirm
      });

    // Stocker le tableau d'objets mis à jour dans le Local Storage
    localStorage.setItem('tableauObjetSubscribe', JSON.stringify(tableauObjetSubscribe));

    // Afficher un message de confirmation
    // alert('Les valeurs ont été ajoutées au tableau d\'objets dans le Local Storage.');


    // Effacer les valeurs des champs input
    this.prenom = "";
    this.nom = "";
    this.email = "";
    this.password = "";
    this.passwordConfirm = "";

  }

  
  sweet(icone: any, titre: any, text: any) {
    Swal.fire({
      title: titre,
      text: text,
      icon: icone,
    })
  }

}
