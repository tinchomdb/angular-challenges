import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { UserStore } from './user.store';

const isAdmin = () => {
  let userStore = inject(UserStore);
  return userStore.user()?.isAdmin ?? false;
};

const isRole = (userRoles: string[]): boolean => {
  let userStore = inject(UserStore);
  let hasRole = false;
  userStore.user()?.roles.forEach((userRole) => {
    if (userRoles.includes(userRole)) {
      hasRole = true;
    }
  });
  return hasRole;
};

export const APP_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'enter',
    canMatch: [() => isAdmin()],
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'enter',

    canMatch: [() => isRole(['MANAGER'])],
    loadComponent: () =>
      import('./dashboard/manager.component').then(
        (m) => m.ManagerDashboardComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },

  //TODO: Add the routes for the other components
  // We need to implement a canMatch to check the user role, or Admin
];
