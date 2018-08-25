import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const myHeaders = {
    'Authorization' : `OAuth oauth_consumer_key="1B2E786547417FF7CBD9369EBBB1554E", oauth_signature_method="PLAINTEXT", oauth_signature="BB272A71148EBDB97016DF8301B3FA28&"`
};

const url = 'https://api.trademe.co.nz/v1/Localities.json';

@Injectable({
  providedIn: 'root',
})
export class LocalitiesService {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization' : `OAuth oauth_consumer_key="1B2E786547417FF7CBD9369EBBB1554E", oauth_signature_method="PLAINTEXT", oauth_signature="BB272A71148EBDB97016DF8301B3FA28&"`
        })
    };

  constructor(public http: HttpClient) {}

  public getLocalities() {
    return this.http.get(url, this.httpOptions);
  }
}