import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RecapCommandeComponent } from './pages/recap-commande/recap-commande.component';
import { RecapCommandesPasseesComponent } from './pages/recap-commandes-passees/recap-commandes-passees.component';

@NgModule({
  declarations: [
    AppComponent,
    RecapCommandeComponent,
    RecapCommandesPasseesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
