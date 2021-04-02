import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

@NgModule({
  declarations: [WelcomeComponent, ProductThumbnailComponent],
  imports: [CommonModule, HomeRoutingModule, FlexLayoutModule, MaterialModule],
})
export class HomeModule {}
