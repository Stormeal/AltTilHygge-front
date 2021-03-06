import { Component, OnInit } from '@angular/core';

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
}
