import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfousService {

  constructor(private http :HttpClient ) { }

  saveDataToDatabase(data : any)  {
    this.http.post("http://localhost:8084/api/infoUS/update" , data)
  }
}
