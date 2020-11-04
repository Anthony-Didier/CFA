import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"user", component:UserComponent},
    {path:"new", component:NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
