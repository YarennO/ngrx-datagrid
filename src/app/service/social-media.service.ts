import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SocialMedia} from "../model/SocialMediaDto";

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  baseurl = 'http://localhost:3000/socialMediaData';

  constructor(private http: HttpClient) { }


  create(data: SocialMedia) {
    return this.http.post(this.baseurl, data);
  }
  readAll() {
    return this.http.get<SocialMedia[]>(this.baseurl);
  }
  update(data: SocialMedia) {
    return this.http.put(this.baseurl + '/' + data.id, data);
  }
  delete(code: number) {
    return this.http.delete(this.baseurl + '/' + code);
  }







}
