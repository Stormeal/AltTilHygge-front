import { Component, OnInit } from '@angular/core';

import {
  faTruck,
  faAward,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  faTruck = faTruck;
  faAward = faAward;
  faHandshake = faHandshake;

  constructor() {}

  ngOnInit(): void {}
}
