import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { TransactionsSectionComponent } from './transactions-section.component';

@Component({
  selector: 'midapp-balance-page',
  template: `
    <div class="flex justify-center gap-4">
      <midapp-balance-section></midapp-balance-section>

      <midapp-transactions-section></midapp-transactions-section>
    </div>
  `,
  standalone: true,
  imports: [BalanceSectionComponent, TransactionsSectionComponent],
})
export class BalancePageComponent {}
