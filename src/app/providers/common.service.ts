import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  constructor(private http: HttpClient) { }

    getServices(){
        return this.http.get(config.apiBaseUrl + "assets/data/services.json");
    }
}