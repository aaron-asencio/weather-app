import { Component, OnInit } from '@angular/core';
import { WeatherReport } from './models/weather-report';
import { WeatherService } from './weather-service';
import { routing } from './app.routes';
import { ActivatedRoute, Router } from '@angular/router';

//when @component is present the app won't run
@Component({
    selector: 'weather-app',
    templateUrl: 'app/weather.component.html',
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

    weather: WeatherReport;
    zipCode: string;
    sub: any;
    errorMessage: string;
    isLoading: boolean = true;
    submitted: boolean = false;
   // pristine: boolean = true;

    constructor(private weatherService: WeatherService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        console.log('ngOnInit calling nginit');

        this.sub = this.route.params.subscribe(params => {
           
           //check numeric
           // Number.parseInt(params['zip']);
            let zip = params['zip']; 
         
            if (!zip || zip.length != 5) {
                zip = '92373';
            }
            this.zipCode = zip;
            
            console.log('getting weather for ' + this.zipCode);

            this.weatherService.getWeather(zip).subscribe(
                w => {
                    this.weather = w;
                    this.weather.zip = zip;
                }, e => this.errorMessage = e, () => this.isLoading = false
            );
        });
        this.isLoading = false;
    }

    searchByZip() {

        console.log('searchByZip zip: ' + this.weather.zip);
        let zip = this.weather.zip;//store zip in temp
       // console.log('searchByZip begin pristine: ' + this.pristine);
        this.submitted = true;
        this.sub = this.route.params.subscribe(params => {
             console.log('searchByZip getting weather for ' + this.weather.zip);
            if (this.weather.zip && this.weather.zip.length == 5) {
                  this.weatherService.getWeather(this.weather.zip).subscribe(
                    w => {
                        this.weather = w;
                        this.weather.zip = zip;
                    }, e => this.errorMessage = e, () => this.isLoading = false
                );
            }
        });
       // this.pristine = false;
       // console.log('searchByZip end pristine: ' + this.pristine);
    }

   

}