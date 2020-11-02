import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-button',
  templateUrl: './redirect-button.component.html',
  styleUrls: ['./redirect-button.component.scss']
})
export class RedirectButtonComponent {

  constructor(private router: Router) {}

  public redirectToAddCard(routeTo: string) {
    this.router.navigate([routeTo]);
  }

}
