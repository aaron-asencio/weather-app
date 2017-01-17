import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { WeatherService } from './weather-service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [PeopleService, WeatherService]
})
export class AppComponent {
  title:string = 'Star Wars Peoplez!';
}
