import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category.model';
import { WelcomeService } from '../../welcome/welcome.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit {
  categories: Category[] = [];
  brands: Category[] = [];
  puzzleSize = ['10x10', '20x10', '30x20', '40x40', '50x50'];
  diamondSize = ['Small', 'Medium', 'Large', 'Extra-Large'];

  constructor(private category: WelcomeService) {}

  ngOnInit(): void {
    this.categories = this.category.getCategories();
    this.brands = this.category.getBrands();
  }
}
