import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { TopCoursesComponent } from './top-courses/top-courses.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {path:'topcourses',component:TopCoursesComponent},
    { path: 'manage-courses', component: ManageCoursesComponent },
    { path: 'admin', component: AdminComponent },
    
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
];
