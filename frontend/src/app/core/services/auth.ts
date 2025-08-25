import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: any) {
    this.userSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user)); // For refresh
  }
  ladFromLocalStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      this.userSubject.next(JSON.stringify(user));
    }
  }
  getUser() {
    return this.userSubject.value;
  }
}



