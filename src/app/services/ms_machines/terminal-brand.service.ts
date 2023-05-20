import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL_MS_MACHINE}/api/v1/brand`

@Injectable({
  providedIn: 'root'
})
export class TerminalBrandService {

  constructor(private http: HttpClient) {

  }



  postBrand(data) {
    return this.http.post(`${API_URL}/create-brand`, data)
  }

  getBrands() {
    return this.http.get(`${API_URL}/get-brands`)
  }



  updateBrand(brand: any, idBrand) {
    return this.http.patch(`${API_URL}/update-terminal-brand/${idBrand}`, brand)


  }
}
