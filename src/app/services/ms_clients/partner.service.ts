import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL_MS_CLIENT}/api/v1/partner`


@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) {

  }

 

  postPartner(data) {
    console.log(data)
    return this.http.post(`${API_URL}/create-partner`, data)
  }

  getPartners() {
    return this.http.get(`${API_URL}/get-partners`)
  }


  updatePartner(partner: any, idPartner) {
    return this.http.patch(`${API_URL}/update-partner/${idPartner}`, partner)
  }

  deletePartner(idPartner) {
    return this.http.delete(`${API_URL}/delete-partner/${idPartner}`)
  }

}
