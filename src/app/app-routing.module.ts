import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HousesComponent } from './pages/houses/houses.component';
import { HouseComponent } from './pages/house/house.component';

const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: '**', component: HousesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
