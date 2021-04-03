import { Component, OnInit } from '@angular/core';
import {
  faTruck,
  faAward,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-media-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss'],
})
export class MediaViewComponent implements OnInit {
  faTruck = faTruck;
  faAward = faAward;
  faHandshake = faHandshake;

  constructor() {}

  ngOnInit(): void {}
}
