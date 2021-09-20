import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly http: HttpClient) { }


  readonly baseURL = 'https://localhost:44312/api/product/getproductbycategoryid'


  _getProductByCategoryId() {
    return this.http.get(this.baseURL); 
  }
}
