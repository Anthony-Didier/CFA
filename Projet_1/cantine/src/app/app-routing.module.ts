import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecapCommandeComponent } from './pages/recap-commande/recap-commande.component';
import { RecapCommandesPasseesComponent } from './pages/recap-commandes-passees/recap-commandes-passees.component';

const routes: Routes = [
    {path:"", component:RecapCommandesPasseesComponent},
    {path:"recap-commandes/:id", component:RecapCommandeComponent},
    {path:"recap-commandes-passees", component:RecapCommandesPasseesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
