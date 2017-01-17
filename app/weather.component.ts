import { Component, OnInit } from '@angular/core';
//import { Weather } from './models/weather';
import { WeatherReport } from './models/weather-report';
import { WeatherService } from './weather-service';

//when @component is present the app won't run
@Component({
    selector: 'weather-app',
    templateUrl: 'app/weather.component.html'
})
export class WeatherComponent implements OnInit {
   // weather: Weather;
    weather: WeatherReport;
    errorMessage: string = 'No error';
    isLoading: boolean = true;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        console.log('calling nginit');
        this.weatherService.getWeather('95409').subscribe(
            w => { this.weather = w }, e => this.errorMessage = e, () => this.isLoading = false
        );
      
        console.log('weather is:  ' + this.weather);
      console.log('error: ' + this.errorMessage);

    }

}