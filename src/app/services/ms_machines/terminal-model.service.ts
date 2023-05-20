import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL_MS_MACHINE}/api/v1/terminal-model`

@Injectable({
  providedIn: 'root'
})
export class TerminalModelService {

  constructor(private http: HttpClient) {

  }



  postTerminalModel(data) {
    return this.http.post(`${API_URL}/create-terminal-model`, data)
  }

  getTerminalModels() {
    return this.http.get(`${API_URL}/get-terminal-models`)
  }



  updateModel(model: any, idModel) {
    return this.http.patch(`${API_URL}/update-terminal-model/${idModel}`, model)


  }
}
