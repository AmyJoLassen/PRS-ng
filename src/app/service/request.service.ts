import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';


@Injectable({
    providedIn: "root"
})
export class RequestService {
    getRequestinReview(id: any) {
      throw new Error('Method not implemented.');
    }
    change(request: Request) {
      throw new Error('Method not implemented.');
    }
    url: string = "http://localhost:8080/request";

    constructor(private http: HttpClient) { }

    list(): Observable<Request[]> {
        return this.http.get(this.url) as Observable<Request[]>;
    }

    get(id: number): Observable<Request> {
        return this.http.get(this.url + "/" + id) as Observable<Request>;
    }

    save(request: Request): Observable<Request> {
        return this.http.post(this.url, request) as Observable<Request>;
    }

    update(request: Request): Observable<Request> {
        return this.http.put(this.url, request) as Observable<Request>;
    }

    delete(id: number): Observable<Request> {
        return this.http.delete(this.url + "/" + id) as Observable<Request>;
    }

    review(request: Request): Observable<any> {
        return this.http.put(this.url, request) as Observable<any>;
        }

    approve(request: Request): Observable<any> {
        return this.http.post(this.url, request) as Observable<Request>;
    }

    reject(request: Request): Observable<Request> {
        return this.http.put(this.url, request) as Observable<Request>
    }
  }