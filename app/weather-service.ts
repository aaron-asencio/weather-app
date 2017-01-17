import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Weather } from './models/weather';
import { WeatherReport } from './models/weather-report';

@Injectable()
export class WeatherService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }

    // private instance variable to hold base url
    private baseUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=c97c6bf76962c87ca86874c0848c8dd3&units=imperial&zip=us,';

    getWeather(zipcode: string): Observable<WeatherReport> {
        if (zipcode && zipcode.length == 5) {
            //http://api.openweathermap.org/data/2.5/weather?APPID=c97c6bf76962c87ca86874c0848c8dd3&zip=us,95409
            let result = this.http.get(`${this.baseUrl}${zipcode}`, { headers: this.getHeaders() })
                // ...and calling .json() on the response to return data
                .map((mapWeatherReport))
                //...errors if any
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

            console.log('results: ' + result);

            return result;
        } else {
            //  throw "Invalid zip code format";
        }

    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapWeather(response: Response): Weather {
    // toPerson looks just like in the previous example
    return toWeather(response.json());
}

function toWeather(r: any): Weather {
    let weather = <Weather>({

        weather: r.weather,
        base: r.base,
        main: r.main,
        coord: r.coord,
        clouds: r.clouds,
        wind: r.wind,


    });
    console.log('Parsed weather:', weather);
    return weather;
}


function mapWeatherReport(response: Response): WeatherReport {
    // toPerson looks just like in the previous example
    return toWeatherReport(response.json());
}

function toWeatherReport(r: any): WeatherReport {
    let weatherReport = <WeatherReport>({
        description: r.weather[0].description,
        icon: r.weather[0].icon,
        temp: r.main.temp,
        temp_max: r.main.temp_max,
        temp_min: r.main.temp_min,
        clouds: r.clouds.all,
        wind: r.wind.speed,
        pressure: r.main.pressure,
        humidity: r.main.humidity,
        name: r.name,
        latitude: r.coord.lon,
        longitude: r.coord.lat


        /*   weather: r.weather,
           base: r.base,
           main: r.main,
           coord: r.coord,
           clouds: r.clouds,
           wind: r.wind,
           */


    });
    console.log('Parsed weather report:', weatherReport);
    return weatherReport;
}


function printkeys(result: any) {
    for (var k in result) {
        if (typeof result[k] !== 'function') {
            alert("Key is " + k + ", value is" + result[k]);
        }
    }
}