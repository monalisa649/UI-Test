import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
//components
import { HousesComponent } from './components/houses/houses.component';
import { CharactersComponent } from './components/characters/characters.component';

//Services

import { PotterService } from './services/potter.service';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    CharactersComponent,
    FilterPipe
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
