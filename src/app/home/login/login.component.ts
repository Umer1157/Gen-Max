import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthServiceService } from '../../services/authServices/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthServiceService);
  private router = inject(Router);

  userLoginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleLogIn() {
    const data = this.userLoginForm.value;
    this.authService.logIn(data).subscribe((response: any) => {
      if (response) {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/home']);
      } else {
        alert('Error Signing In');
      }
    });
  }
}
