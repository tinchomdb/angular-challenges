import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserStore } from './user.store';

@Directive({
  selector: '[role]',
})
export class RoleDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  private readonly userStore = inject(UserStore);

  roleAllowed = input<string[]>();
  roleIsAdmin = input<boolean>(false);
  user = this.userStore.user;

  constructor() {
    effect(() => {
      this.viewContainerRef.clear();

      if (this.user()?.isAdmin) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        return;
      }
      if (!this.user() || !this.roleAllowed()) {
        return;
      }

      this.user()!.roles.forEach((userRole) => {
        if (this.roleAllowed()!.includes(userRole)) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
          return;
        }
      });
    });
  }
}
