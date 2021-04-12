import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CollectionComponent } from './shop/collection/collection.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  { path: 'shop/collection', component: CollectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
