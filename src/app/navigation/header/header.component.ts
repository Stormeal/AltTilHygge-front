import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() timedOutCloser: any = new EventEmitter<void>();

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  mouseEnter(trigger: any) {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu();
  }

  mouseLeave(trigger: any) {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }

  goToCollection() {
    this.route.navigate(['home/shop/collection']);
  }
}
