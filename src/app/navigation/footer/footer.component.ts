import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
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
          width: 1,
        })
      ),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('1200ms ease-out')),
    ]),
  ],
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  show = false;
  show1 = false;

  constructor() {}

  ngOnInit(): void {}

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
