import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterOutlet, HdWalletMultiButtonComponent],
  selector: 'midapp-root',
  template: `
    <header class="py-8">
      <h1 class="text-5xl text-center mb-4">Hola, R Mutt.</h1>

      <div class="flex justify-center mb-4">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
