import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private route = inject(Router);

  token = '';
  userData: any;

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';
    this.userData = this.decodeToken(this.token);
  }

  private decodeToken(token: string): any {
    if (!token) return null;
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  handleSignOut() {
    localStorage.removeItem('token');
    this.route.navigate(['/sign-up']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
