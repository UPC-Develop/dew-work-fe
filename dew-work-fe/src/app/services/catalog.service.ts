import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private readonly http: HttpClient) { }
  __getCatalog(){
    return this.http.get('https://localhost:44312/api/catalog/getcatalog');
  }
}
