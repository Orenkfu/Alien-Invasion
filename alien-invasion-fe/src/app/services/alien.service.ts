import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AlienService {
  columns = {
    "chief commander": ['name', 'vehicle', 'membership_card'],
    "warrior": ['name', 'weapon'],
    "commander": ['name', 'vehicle'],
  }

  url = `${ environment.base_url }/aliens`
  constructor(private http: HttpClient) { }
  createAlien (alien) {
    return this.http.post(this.url, alien);
  }
  getAliens() {
    return this.http.get(this.url);
  }
  getBy(param, value) {
    return this.http.get(`${this.url}/${value}?param=${param}`);
  }
  getListColumns(type) {
    console.log(type);
    return this.columns[type.toLowerCase()];
  }
}
