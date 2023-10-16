import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
{
  path: '',
  component:HomeComponent
},
{
  path:'content/:id',
  component:ContentComponent
}

];
=======

const routes: Routes = [];
>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
