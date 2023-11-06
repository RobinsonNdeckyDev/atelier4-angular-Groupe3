import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginContactComponent } from './login-contact/login-contact.component';
import { CorbeilleContactComponent } from './corbeille-contact/corbeille-contact.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { FormsModule } from '@angular/forms';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContactComponent,
    CorbeilleContactComponent,
    ListeContactsComponent,
    AjoutContactComponent,
    ModifierContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
