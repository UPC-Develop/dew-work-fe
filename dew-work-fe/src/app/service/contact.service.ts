import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from '../model/contact.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private readonly http: HttpClient) { }

  formData: ContactModel = new ContactModel();

  readonly baseURL = 'https://localhost:44312/api/contact/savecontact'

  _postSaveContact() {
     return this.http.post(this.baseURL, this.formData);
  }
}
