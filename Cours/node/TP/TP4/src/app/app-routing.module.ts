import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"users", component:UsersComponent},
    {path:"formulaires", component:FormulairesComponent},
    {path:"404", component:NotFoundComponent},
    {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
