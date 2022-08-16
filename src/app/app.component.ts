import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weatherFinal.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  constructor(private weatheService: WeatherService){

  }
  cityName: string = 'mumbai';

  weatherData?: WeatherData;

  ngOnInit(): void{
this.getWeatheData(this.cityName);
this.cityName=''

    // this.weatheService.getWeatherData('Kolkata')
    // .subscribe({
    //   next: (response)=> {
    //       this.weatherData=response;
    //     console.log(response);
    //   }
    // });
  }

  onSubmit(){
    this.getWeatheData(this.cityName);
    this.cityName='';
  }
  private getWeatheData(cityName: string){
    this.weatheService.getWeatherData(this.cityName)
    .subscribe({
      next: (response)=> {
          this.weatherData=response;
        console.log(response);
      }
    });

  }
  
}
