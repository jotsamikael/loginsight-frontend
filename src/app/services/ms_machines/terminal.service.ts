import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL_MS_MACHINE}/api/v1/terminal`


@Injectable({
  providedIn: 'root'
})
export class TerminalService {


  constructor(private http: HttpClient) {

  }



  postTerminal(data) {
    return this.http.post(`${API_URL}/create-terminal`, data)
  }

  getTerminals() {
    return this.http.get(`${API_URL}/get-terminals`)
  }


  getTerminalByIdBranch(idBranch: Number) {
    return this.http.get(`${API_URL}/get-terminal-by-idBranch/${idBranch}`)
  }


  updateTerminal(terminal: any, idTerminal) {
    return this.http.patch(`${API_URL}/update-terminal/${idTerminal}`, terminal)


  }
}
