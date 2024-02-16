import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'midapp-root',
  template: ` <header class="py-8">
    <h1 class="text-5xl text-center mb-4">Hola, R Mutt.</h1>

    <div class="flex justify-center">
      <hd-wallet-multi-button></hd-wallet-multi-button>
    </div>
  </header>`,
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  //readonly account = computedAsync(
  //() => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
  //{ requireSync: true }, //esto por un bug
  //);
}
