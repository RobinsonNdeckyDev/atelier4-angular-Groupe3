import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginContactComponent } from './login-contact/login-contact.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { CorbeilleContactComponent } from './corbeille-contact/corbeille-contact.component';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';


const routes: Routes = [
  { path: '', redirectTo: "connexion", pathMatch: 'full' },
  { path: 'connexion', component: LoginContactComponent },
  { path: 'liste', component: ListeContactsComponent },
  { path: 'ajout', component: AjoutContactComponent },
  { path: 'Modifier', component: ModifierContactComponent },
  { path: 'Corbeille', component: CorbeilleContactComponent },
  { path: '**', redirectTo: "connexion", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
