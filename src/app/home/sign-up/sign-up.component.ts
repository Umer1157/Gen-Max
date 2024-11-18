import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/authServices/auth-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  authService = inject(AuthServiceService);
  private router = inject(Router);
  userSignUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('user'),
  });

  handleSignUp() {
    const data = this.userSignUpForm.value;
    this.authService.signUp(data).subscribe((response: any) => {
      if (response) {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/home']);
      } else {
        alert('Error Signing Up');
      }
    });
  }
}
