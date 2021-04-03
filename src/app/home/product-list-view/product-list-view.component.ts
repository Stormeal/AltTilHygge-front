import { Component, OnInit } from '@angular/core';
import * as data from '../../shared/products.json';

import {
  faTruck,
  faAward,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit {
  products;

  constructor() {
    this.products = data.products;
  }

  ngOnInit(): void {}
}
