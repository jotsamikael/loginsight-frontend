import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


const API_URL = `${environment.BASE_URL_MS_OPERATION}/api/v1/operation`


@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  uploadMultiple(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${API_URL}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  



 

  getSummary() {
    return this.http.get(`${API_URL}/summary`)

  }


  getSummaryDay(date: String) {
    console.log(date)
    return this.http.get(`${API_URL}/day_summary/${date}`)
  }  


  getSummaryTerminal(idTerminal: String) {
    return this.http.get(`${API_URL}/day-summary-terminal/${idTerminal}`)
} 

 getReportData(reportRequest: any){
   return this.http.post(`${API_URL}/get-report-data`, reportRequest)
 }



getKpiData(reportRequest: any){
  return this.http.post(`${API_URL}/get-kpi-data`, reportRequest)
}


  getTableSummary(reportRequest: any) {
    return this.http.post(`${API_URL}/operation-summary`, reportRequest)
  }

  getClassifyOperationsByType() {
    return this.http.get(`${API_URL}/classify-operations-by-type`)
  }
}