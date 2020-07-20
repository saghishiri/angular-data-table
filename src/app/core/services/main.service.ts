import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private  http: HttpClient,) {
  }

  getData(): Observable<any> {
    // return this.http.get<any>(API_URL);
    return this.http.get<any>('assets/demo.json');
  }
}
