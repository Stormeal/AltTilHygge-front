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
  products = [
    {
      id: 0,
      title: 'Eksotisk Tukan',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '',
      originalPrice: 300,
      campaignTag: 'SALE',
    },
    {
      id: 1,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: null,
      campaignTag: 'SALE',
    },
    {
      id: 3,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: null,
      campaignTag: '',
    },
    {
      id: 4,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: 500,
      campaignTag: '50%',
    },
    {
      id: 5,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: null,
      campaignTag: '',
    },
    {
      id: 6,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: null,
      campaignTag: 'NEW',
    },
    {
      id: 7,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: null,
      campaignTag: '',
    },
    {
      id: 8,
      title: 'Elvis Presley',
      description: 'Dette er en grundig beskrivelse af produktet',
      quantity: 5,
      price: 250,
      image: '',
      barcode: '',
      category: 'Diamond Painting',
      subcategory: '',
      size: '40x50',
      originalPrice: null,
      campaignTag: '',
    },
  ];

  constructor() {
    this.products = this.products;
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
