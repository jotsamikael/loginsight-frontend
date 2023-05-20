import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


const API_URL = `${environment.BASE_URL_MS_CLIENT}/api/v1/point`


@Injectable({
  providedIn: 'root'
})
export class PointOfPresenceService { 

  constructor(private http: HttpClient) {

  } 


  postPointOfPresence(PointOfPresence) {
    console.log(PointOfPresence)
    return this.http.post(`${API_URL}/create-point-of-presence`, PointOfPresence)
  }

  getPointOfPresence() {
    return this.http.get(`${API_URL}/get-points-of-presence`)
  }


  getRegion() {
    return this.http.get(`http://localhost:8090/api/v1/region/get-regions`)
  }

  updatePointOfPresence(PointOfPresence: any, idPointOfPresence) {
    return this.http.patch(`${API_URL}/update-point_of_presence/${idPointOfPresence}`, PointOfPresence)


  }

  deletePointOfPresence(idPointOfPresence) {
    return this.http.delete(`${API_URL}/delete-point_of_presence/${idPointOfPresence}`)
  }
}
