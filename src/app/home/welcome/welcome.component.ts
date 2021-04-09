import { Component, OnInit } from '@angular/core';

import {
  faTruck,
  faAward,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/shared/category.model';
import { WelcomeService } from './welcome.service';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  faTruck = faTruck;
  faAward = faAward;
  faHandshake = faHandshake;

  constructor(private categoryService: WelcomeService) {}

  ngOnInit(): void {}
}
