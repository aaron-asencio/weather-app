import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather';
import { WeatherService } from './weather-service';

@Component({
    selector: 'weather-app',
    templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
    weather: Weather;
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.weatherService.getWeather('95409').subscribe(
            w => this.weather = w, e => this.errorMessage = e, () => this.isLoading = false
        );
    }

}