import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Weather } from './models/weather';

@Injectable()
export class WeatherService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }

    // private instance variable to hold base url
    private baseUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=c97c6bf76962c87ca86874c0848c8dd3&zip=us,';

    weather: Weather;


    getWeather(zipcode: string): Observable<Weather> {
        if (zipcode && zipcode.length == 5) {
            //http://api.openweathermap.org/data/2.5/weather?APPID=c97c6bf76962c87ca86874c0848c8dd3&zip=us,95409

            this.weather.main.temp = 59;
            this.weather.weather[0].description = 'Rain showers';
            let result: Observable<Weather> = this.http.get(`${this.baseUrl}${zipcode}`, { headers: this.getHeaders() })
                // ...and calling .json() on the response to return data
                .map((mapWeather))
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
