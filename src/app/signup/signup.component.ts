import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.signupForm = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpassword: ['', Validators.required],
      },
      { validators: this.passwordsMatch }
    );
  }

  // Custom validator to check if passwords match
  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmpassword = group.get('confirmpassword')?.value;
    return password === confirmpassword ? null : { mismatch: true };
  }

  // Handle student registration
  registerStudent() {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value; // Extract form values
      this.studentService.registerStudent(signupData).subscribe(
        (response) => {
          console.log('Student registered successfully:', response);
          alert('Registration Successful!');
          this.signupForm.reset(); // Reset form after success
        },
        (error) => {
          console.error('Error registering student:', error);
          alert('Registration Successful!');
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
 

}
