import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  adminForm: FormGroup;
  admins: any[] = [];
  selectedAdmin: any = null;

  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins() {
    // Dummy data for grid demonstration
    this.admins = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];
  }

  saveAdmin() {
    if (this.adminForm.value.id) {
      this.adminService.updateAdmin(this.adminForm.value.id, this.adminForm.value).subscribe(() => {
        alert('Admin updated successfully!');
        this.loadAdmins();
      });
    } else {
      this.adminService.registerAdmin(this.adminForm.value).subscribe(() => {
        alert('Admin registered successfully!');
        this.loadAdmins();
      });
    }
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id).subscribe(() => {
      alert('Admin deleted successfully!');
      this.loadAdmins();
    });
  }

  selectAdmin(admin: any) {
    this.selectedAdmin = admin;
    this.adminForm.patchValue(admin);
  }

  resetForm() {
    this.selectedAdmin = null;
    this.adminForm.reset();
  }

}
