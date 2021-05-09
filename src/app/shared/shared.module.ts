import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCarouselModule } from 'ng-mat-carousel';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [
    MatCarouselModule.forRoot(),
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
  ],
  declarations: [],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}
