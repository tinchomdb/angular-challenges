import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /* 
  Information
  Structural directives are directives which change the DOM layout by adding and removing DOM elements. This is an important concept you’ll need to improve your angular skills and knowledge. This will be the first part of this challenge. For more information check out the official documentation.

  Guards like CanActivate or CanMatch are also very important, since you’ll need it in the most application’s you build. If you’re not very familiar with route guards, check out this two articles.

  Link: Everything you need to know about route Guard in Angular
  Link: Create a route Guard to manage permissions
  
  In LoginComponent you’ll find 6 buttons corresponding to 6 different user’s role.

  Admin
  Manager
  Reader
  Writer
  Reader and Writer
  Client
  Everyone
  
  In InformationComponent you’ll need to display the correct piece of information for each role using a structural directive.

  Constraints
  No ngIf or @if inside InformationComponent.
  Importing the store inside InformationComponent is not allowed.
  You should end up with something like below:

  <div *hasRole="Role1">Info for Role1</div>

  <div *hasRole="['Role1', 'Role2']">Info for Role1 and Role2</div>

  <div *hasRoleSuperAdmin="true">Info Only for superadmin</div>

  Step 2
  In Routes.ts you should route all users to the correct DashboardComponent using CanMatch guard.
  */
}
