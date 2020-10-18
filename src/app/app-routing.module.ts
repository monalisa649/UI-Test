import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HousesComponent } from './components/houses/houses.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HouseComponent } from './components/house/house.component';

const routes: Routes = [
  {path: '', component: HousesComponent},
  {path:'houses', component: HousesComponent},
  {path: 'characters/:id', component: CharactersComponent},
  {path:'house/:id', component: HouseComponent},
  {path: '**', component: HousesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
