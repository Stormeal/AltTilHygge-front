import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { MediaViewComponent } from './welcome/media-view/media-view.component';
import { NewsletterViewComponent } from './welcome/newsletter-view/newsletter-view.component';
import { CategoriesComponent } from './welcome/categories/categories.component';
import { WelcomeService } from './welcome/welcome.service';
import { CollectionComponent } from './shop/collection/collection.component';
import { FilterListComponent } from './shop/filter-list/filter-list.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ProductThumbnailComponent,
    ProductListViewComponent,
    MediaViewComponent,
    NewsletterViewComponent,
    CategoriesComponent,
    CollectionComponent,
    FilterListComponent,
  ],
  imports: [HomeRoutingModule, MaterialModule, SharedModule],
  providers: [WelcomeService],
})
export class HomeModule {}
