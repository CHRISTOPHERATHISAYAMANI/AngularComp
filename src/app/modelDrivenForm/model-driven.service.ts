import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ModelDrivenService {

  constructor(private http: Http) { }
  addForm(body: string , options: RequestOptions) {
     return this.http.post('http://localhost:3000/jsondbServer', body, options);
    }
}
