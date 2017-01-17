import { Component } from '@angular/core';
import { WeatherService } from './weather-service';

@Component({
  selector: 'my-app',
  template: ` <router-outlet>`,
  providers: [ WeatherService]
})
export class AppComponent {
  
}
