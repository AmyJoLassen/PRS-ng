import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vendor } from '../model/vendor.class';


@Injectable({
    providedIn: "root"
})
export class VendorService {
    url: string = "http://localhost:8080/vendor";

    constructor(private http: HttpClient) { }

    list(): Observable<vendor[]> {
        return this.http.get(this.url) as Observable<vendor[]>;
    }

    get(id: number): Observable<vendor> {
        return this.http.get(this.url + "/" + id) as Observable<vendor>;
    }

    save(vendor: vendor): Observable<vendor> {
        return this.http.post(this.url, vendor) as Observable<vendor>;
    }

    update(vendor: vendor): Observable<vendor> {
        return this.http.put(this.url, vendor) as Observable<vendor >;
    }

    delete(id: number): Observable<vendor> {
        return this.http.delete(this.url + "/" + id) as Observable<vendor>;
    }
}