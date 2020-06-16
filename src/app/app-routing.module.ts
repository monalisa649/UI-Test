import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HousesComponent } from './components/houses/houses.component';
import { CharactersComponent } from './components/characters/characters.component';



const routes: Routes = [
  {path:'houses', component: HousesComponent},
  {path: 'characters',component: CharactersComponent},
  {path: '**', component: HousesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
