import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl : String = "http://localhost:3006/weather"

  constructor(private http :HttpClient) { }
  search(obj){
    return this.http.get<{ result: any}>(`${this.weatherUrl}/${JSON.stringify(obj)}`)


  }
}
