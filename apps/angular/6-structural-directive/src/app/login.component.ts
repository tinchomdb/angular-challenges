import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from './button.component';
import { InformationComponent } from './information.component';
import {
  admin,
  client,
  everyone,
  manager,
  reader,
  readerAndWriter,
  writer,
} from './user.model';
import { UserStore } from './user.store';

@Component({
  imports: [InformationComponent, RouterLink, ButtonComponent],
  selector: 'app-login',
  template: `
    <header class="flex items-center gap-3">
      Log as :
      <button app-button (click)="admin()">Admin</button>
      <button app-button (click)="manager()">Manager</button>
      <button app-button (click)="reader()">Reader</button>
      <button app-button (click)="writer()">Writer</button>
      <button app-button (click)="readerWriter()">Reader and Writer</button>
      <button app-button (click)="client()">Client</button>
      <button app-button (click)="everyone()">Everyone</button>
    </header>

    <app-information />

    <button app-button class="mt-10" routerLink="/enter">
      Enter application
    </button>
  `,
})
export class LoginComponent {
  private readonly userStore = inject(UserStore);
  router = inject(Router);

  admin() {
    this.userStore.loginAs(admin);
  }
  manager() {
    this.userStore.loginAs(manager);
  }
  reader() {
    this.userStore.loginAs(reader);
  }
  writer() {
    this.userStore.loginAs(writer);
  }
  readerWriter() {
    this.userStore.loginAs(readerAndWriter);
  }
  client() {
    this.userStore.loginAs(client);
  }
  everyone() {
    this.userStore.loginAs(everyone);
  }
}
