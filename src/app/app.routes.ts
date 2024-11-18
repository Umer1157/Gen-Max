import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { IndexComponent } from './home/index/index.component';
import { AvalabilityFormComponent } from './home/avalability-form/avalability-form.component';
import { GeneratorDetailComponent } from './home/generator-detail/generator-detail.component';
import { CreateBookingComponent } from './home/create-booking/create-booking.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('token') ? '/home' : '/sign-up',
    pathMatch: 'full',
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: IndexComponent },
  { path: 'avalability-form', component: AvalabilityFormComponent },
  { path: 'generator-detail/:genSr', component: GeneratorDetailComponent },
  { path: 'create-booking/:id', component: CreateBookingComponent },
];
