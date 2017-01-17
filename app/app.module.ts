import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

//import { AppComponent }  from './app.component';
import { WeatherComponent } from './weather.component';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [  WeatherComponent],
  bootstrap: [ WeatherComponent ]
})
export class AppModule { }
