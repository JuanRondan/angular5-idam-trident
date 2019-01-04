import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  private userApiUrl = environment.userApiUrl;

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<string> {
    return this.http.get<string>( `${ this.userApiUrl }` );
  }
}
