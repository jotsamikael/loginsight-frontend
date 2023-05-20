import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = `${environment.BASE_URL_MS_CLIENT}/api/v1/branch`

@Injectable({
  providedIn: 'root'
})
export class BranchService {


  constructor(private http: HttpClient) {

  }


  postBranch(data) {
    console.log(data)
    return this.http.post(`${API_URL}/create-branch`, data)
  }

  getBranches() {
    return this.http.get(`${API_URL}/get-branches`)
  } 

 
  getBranchById(idBranch: string) {
    return this.http.get(`${API_URL}/get-branch/${idBranch}`)
  } 



  updateBranch(branch: any, idBranch) {
    return this.http.patch(`${API_URL}/update-branch/${idBranch}`, branch)


  }

  deleteBranch(idBranch) {
    return this.http.delete(`${API_URL}/delete-branch/${idBranch}`)
  }
}
