import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule,
    MatIconModule,
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent  {
  showProfileMenu = false;
  menuOpen = false;
  
  constructor(private router: Router) {}

  
  toggleProfileMenu(): void {
    this.showProfileMenu = !this.showProfileMenu;
  }

  navigateToPage(event: Event, route: string): void {
    event.stopPropagation(); // Prevents closing the dropdown
    this.showProfileMenu = false; // Closes the menu after navigating
    this.router.navigateByUrl(route); // Navigate to the desired route
  }
 
 
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Toggle the menu's visibility
  }

  

}
