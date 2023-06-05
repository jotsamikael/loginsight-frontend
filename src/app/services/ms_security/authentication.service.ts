import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


const API_URL = `${environment.BASE_URL_MS_SECURITY}/api/v1/`

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient) {


    let storageUser;
    const storageUserAsStr = sessionStorage.getItem('currentUser')//localStorage.getItem('currentUser');
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr)
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(API_URL + 'sign-in', user).pipe(
      map(response => {
        if (response) {
          // localStorage.setItem('currentUser', JSON.stringify(response));
          sessionStorage.setItem('currentUser', JSON.stringify(response));

          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

}
