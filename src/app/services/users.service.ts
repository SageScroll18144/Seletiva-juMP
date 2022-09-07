import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL_to_get = 'https://jumpcnj.cin.ufpe.br/api/desafio/image/7065/?detail_level=3'
  private baseURL_to_post = 'https://jumpcnj.cin.ufpe.br/api/desafio/infos/7065'
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL_to_get}/getAll`)
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL_to_post}/post`, data)
  }
}
