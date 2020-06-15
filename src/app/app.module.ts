import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HousesComponent } from './components/houses/houses.component';

//Services

import { PotterService } from './services/potter.service';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [PotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
