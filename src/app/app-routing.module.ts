import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { RedirectButtonComponent } from './redirect-button/redirect-button.component';

const routes: Routes = [
  { path: '', component: RedirectButtonComponent },
  { path: 'card-detail', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
