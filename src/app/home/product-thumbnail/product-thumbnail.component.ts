import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import * as data from '../../shared/products.json';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out')),
    ]),
  ],
})
export class ProductThumbnailComponent implements OnInit {
  @Output() iconVisible = false;
  show = false;
  products;

  constructor() {
    this.products = data.products;
  }

  ngOnInit(): void {}

  mouseEnter() {
    this.iconVisible = true;
  }

  mouseLeave() {
    this.iconVisible = false;
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
