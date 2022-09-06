import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Image } from '../models/placeholder.model';

@Injectable({
  providedIn: 'root'
})
export class GetImgService {

  private readonly API = 'https://jumpcnj.cin.ufpe.br/api/desafio/image/7065/?detail_level=3'
  
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Image[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }

}
