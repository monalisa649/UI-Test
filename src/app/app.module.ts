//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//components
import { HousesComponent } from './components/houses/houses.component';


//Services
import { PotterService } from './services/potter.service';

//Pipe
import { FilterPipe } from './pipes/filter.pipe';

import { MenuComponent } from './components/menu/menu.component';
import { HouseComponent } from './components/house/house.component';



@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    FilterPipe,
    MenuComponent,
    HouseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
