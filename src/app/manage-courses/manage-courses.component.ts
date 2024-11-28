import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-courses',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
  ],
  templateUrl: './manage-courses.component.html',
  styleUrl: './manage-courses.component.css'
})
export class ManageCoursesComponent implements OnInit {
  courses: any[] = [];
  selectedCourse: any = null;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

    // Fetch all courses
    fetchCourses(): void {
      this.courseService.getCourses().subscribe((data) => {
        this.courses = data;
      });
    }
  
    // Edit a course
    editCourse(course: any): void {
      this.selectedCourse = { ...course }; // Clone the course for editing
    }

      // Save changes to the course
  saveCourse(): void {
    if (this.selectedCourse) {
      this.courseService
        .updateCourse(this.selectedCourse.courseId, this.selectedCourse)
        .subscribe(() => {
          this.fetchCourses();
          this.selectedCourse = null;
        });
    }
  }

  // Delete a course
  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.fetchCourses();
      });
    }
  }

}
