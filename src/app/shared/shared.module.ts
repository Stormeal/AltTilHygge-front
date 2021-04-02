import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, FormsModule],
  exports: [CommonModule, FlexLayoutModule, FormsModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
