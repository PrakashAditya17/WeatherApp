import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weatherFinal.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherData>{
    let url=environment.weatherApiBaseUrl;
    console.log('city is',cityName)
    //url=url.replace('{enter_here}',cityName)
    //console.log('URL after=',url)
    return this.http.get<WeatherData>(url,{
       headers: new HttpHeaders().
        set(environment.XRapidAPIHostHeaderName,
        environment.XRapidAPIHostHeaderValue).
        set(environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue),
       params: new HttpParams().set('location',cityName)
        })
       
        
    } 
     
}
