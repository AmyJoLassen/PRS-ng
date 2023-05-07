import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: "root"
})

export class UserService {
    url: string = "http://localhost:8080/users";

    constructor(private http: HttpClient) {}

    list(): Observable<User[]> {
        return this.http.get(this.url) as Observable<User[]>;
    }

    get(id: number): Observable<User> {
        return this.http.get(this.url + "/" + id) as Observable<User>;
    }

    save(user: User): Observable<User> {
        return this.http.post(this.url, user) as Observable<User>;
    }

    update(user: User): Observable<User> {
        return this.http.put(this.url, user) as Observable<User>;
    }

    delete(id: number): Observable<User> {
        return this.http.delete(this.url + "/" + id) as Observable<User>;
    }

    create(user: User): Observable<User> {
        return this.http.put(this.url, user) as Observable<User>;
    }

    login(user: User): Observable<User> {
        return this.http.post(this.url + "login", user) as Observable<User>;
    }
}