import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Home',      path: '/',         exact: true },
    { label: 'About',     path: '/about',    exact: false },
    { label: 'Services',  path: '/services', exact: false },
    { label: 'Portfolio', path: '/portfolio',exact: false },
    { label: 'Contact',   path: '/contact',  exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}
