import { Component, OnInit } from '@angular/core';
import { WeatherReport } from './models/weather-report';
import { WeatherService } from './weather-service';
import { routing } from './app.routes';

//when @component is present the app won't run
@Component({
    selector: 'weather-app',
    templateUrl: 'app/weather.component.html',
    providers: [ WeatherService]
})
export class WeatherComponent implements OnInit {
  
    weather: WeatherReport;
    errorMessage: string;
    isLoading: boolean = true;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        console.log('calling nginit');
        this.weatherService.getWeather('95409').subscribe(
            w => { this.weather = w }, e => this.errorMessage = e, () => this.isLoading = false
        );
      

    }

}