import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubscriptionModel } from '../model/susbcription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private readonly http: HttpClient) { }

  formData: SubscriptionModel = new SubscriptionModel();

  readonly baseURL = 'https://localhost:44312/api/subscription/savesubscription'


  _postSaveSusbscription() {
     return this.http.post(this.baseURL, this.formData);
  }
}
