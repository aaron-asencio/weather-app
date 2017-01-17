import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingProviders } from './app.routes';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { WeatherComponent } from './weather.component';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [  WeatherComponent, AppComponent],
  providers: [
        appRoutingProviders
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
