import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getHelpLineList(){
    return this.httpClient.get('https://api.rootnet.in/covid19-in/contacts');
  }
  getNotificationList(){
    return this.httpClient.get('https://api.rootnet.in/covid19-in/notifications');
  }
  getHospitalsBeds(){
    return this.httpClient.get('https://api.rootnet.in/covid19-in/hospitals/beds');
  }
  getMedicalCollegeBeds(){
    return this.httpClient.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges');
  }
}