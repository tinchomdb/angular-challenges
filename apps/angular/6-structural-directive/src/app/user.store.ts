import { Injectable, signal } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  readonly user = signal<User | undefined>(undefined);

  loginAs(user: User) {
    this.user.set(user);
  }
}
