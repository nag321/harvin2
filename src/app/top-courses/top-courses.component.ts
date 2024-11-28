import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MainVideoComponent } from '../main-video/main-video.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";




@Component({
  selector: 'app-top-courses',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './top-courses.component.html',
  styleUrl: './top-courses.component.css'
})
export class TopCoursesComponent {

  
  
  
  

  

}
