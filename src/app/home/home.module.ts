import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

@NgModule({
  declarations: [WelcomeComponent, ProductThumbnailComponent],
  imports: [HomeRoutingModule, MaterialModule, SharedModule],
})
export class HomeModule {}
