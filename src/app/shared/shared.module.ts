import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCarouselModule } from 'ng-mat-carousel';

@NgModule({
  imports: [
    MatCarouselModule.forRoot(),
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [CommonModule, FlexLayoutModule, FormsModule, FontAwesomeModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
