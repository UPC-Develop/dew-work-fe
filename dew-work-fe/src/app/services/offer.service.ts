import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private readonly http: HttpClient) { }
  __getOffers(){
    return this.http.get('https://localhost:44312/api/offer/getoffers');
  }
}
