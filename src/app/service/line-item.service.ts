import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../model/line-item.class';


@Injectable({
    providedIn: "root"
})
export class LineItemService {
    url: string = "http://localhost:8080/products";

    constructor(private http: HttpClient) { }

    list(): Observable<LineItem[]> {
        return this.http.get(this.url) as Observable<LineItem[]>;
    }

    get(id: number): Observable<LineItem> {
        return this.http.get(this.url + "/" + id) as Observable<LineItem>;
    }

    save(lineitem: LineItem): Observable<LineItem> {
        return this.http.post(this.url, LineItem) as Observable<LineItem>;
    }

    update(lineitem: LineItem): Observable<LineItem> {
        return this.http.put(this.url, LineItem) as Observable<LineItem>;
    }

    delete(id: number): Observable<LineItem> {
        return this.http.delete(this.url + "/" + id) as Observable<LineItem>;
    }
  }