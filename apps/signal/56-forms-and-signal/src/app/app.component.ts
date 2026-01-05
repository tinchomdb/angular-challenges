import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `
    <h1 class="text-3xl">Shop</h1>
    <div class="w-[500px] ">
      <router-outlet />
    </div>
  `,
  host: {
    class: 'w-full flex justify-center flex-col items-center p-4 gap-10',
  },
})
export class AppComponent {
  /* 
  The current feature in development is a multi-step form process. The steps include: selecting a product, choosing the quantity, 
  and finally proceeding to the checkout step to complete the billing details. However, an issue has been identified: 
  when a user navigates back from the checkout step to the quantity step, the previously selected quantity is not retained. This needs to be fixed.

  Challenge Statement
  The objective of this challenge is to make sure that the selected quantity is preserved when navigating back from the checkout step to the quantity step.

  Constraints
  The solution must use reactive forms and signals.

  Additionally, as an optional side challenge, you may refactor the code to use template-driven forms.
  */
}
