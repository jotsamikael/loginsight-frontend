import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL_MS_MACHINE}/api/v1/terminal-type`

@Injectable({
  providedIn: 'root'
})
export class TerminalTypeService {


  constructor(private http: HttpClient) {

  }



  postTerminalType(data) {
    return this.http.post(`${API_URL}/create-terminal-type/`, data);
  }

  getTerminalTypes() {
    return this.http.get(`${API_URL}/get-terminal-types`);
  }

  updateTerminalType(terminalType: any, idTerminalType) {
    return this.http.patch(`${API_URL}/update-terminal-type/${idTerminalType}`, terminalType)


  }
}
