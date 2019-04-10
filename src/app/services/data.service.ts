import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _baseUrl = environment.apiUrl;
  constructor(public http: HttpClient, private _pathPrefix: string) {}

  get BaseUrl() {
    return this._baseUrl + this._pathPrefix;
  }

  create<T>(model: any) {
    return this.http.post<T>(this.BaseUrl, model);
  }

  all<T>() {
    return this.http.get<T>(this.BaseUrl);
  }

  get<T>(id: number) {
    return this.http.get<T>(this.BaseUrl + '/' + id);
  }

  getSpecial<T>(id: string) {
    return this.http.get<T>(this.BaseUrl + id);
  }

  update<T>(id: any, model: any) {
    return this.http.put<T>(this.BaseUrl + '/' + id, model);
  }

  updateSpecial(id: any, model: any) {
    return this.http.put(this.BaseUrl + '/' + id, model);
  }
}
