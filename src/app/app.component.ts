import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'midapp-root',
  template: '
    <header>
    <h1> Hola RMutt </h1>
    </header>
  ',
})
export class AppComponent {
}
