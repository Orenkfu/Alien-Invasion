import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AlienService {
  url = `${ environment.base_url }/aliens`
  constructor(private http: HttpClient) { }
  getAliens() {
    return this.http.get(this.url);
  }
}
