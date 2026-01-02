import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoleDirective } from './role.directive';
import { UserStore } from './user.store';

@Component({
  selector: 'app-information',
  template: `
    <h2 class="mt-10 text-xl">Information Panel</h2>
    <!-- admin can see everything -->
    <div *role="let x">visible only for super admin</div>
    <div *role="let x; allowed: ['MANAGER']">visible if manager</div>
    <div *role="let x; allowed: ['MANAGER', 'READER']">
      visible if manager and/or reader
    </div>
    <div *role="let x; allowed: ['MANAGER', 'WRITER']">
      visible if manager and/or writer
    </div>
    <div *role="let x; allowed: ['CLIENT']">visible if client</div>
    <div>visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RoleDirective],
})
export class InformationComponent {
  private readonly userStore = inject(UserStore);
  roleString = 'Manager';
  /* user$ = this.userStore.user$; */
}
