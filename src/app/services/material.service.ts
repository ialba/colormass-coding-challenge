import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {
  Http,
 } from '@angular/http';

 import { Material } from '../types/material';

@Injectable()
export class MaterialService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/materials';  // URL to web api

  constructor(
    private http: Http
  ) {
  }

  getMaterials(): Promise<Material[]> {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json() as Material[])
        .catch(this.handleError);
  }

  getMaterial(id:string): Promise<Material>{
    return this.http.get(this.heroesUrl+'?id='+id)
        .toPromise()
        .then(response => response.json()[0] as Material)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
