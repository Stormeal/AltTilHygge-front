import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, HomeRoutingModule, FlexLayoutModule],
})
export class HomeModule {}
