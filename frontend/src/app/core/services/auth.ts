import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface User {
  id: string;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class Auth {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage();
  }

  setUser(user: User) {
    this.userSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user)); // For refresh
  }
  loadFromLocalStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }
  getUser() {
    return this.userSubject.value;
  }
}



