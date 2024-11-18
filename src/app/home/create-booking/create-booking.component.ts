import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../../services/bookingService/booking-service.service';

@Component({
  selector: 'app-create-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css',
})
export class CreateBookingComponent implements OnInit {
  route = inject(ActivatedRoute);
  id: string = '';
  startDate: string = '';
  endDate: string = '';
  createBookingForm: FormGroup = new FormGroup({});
  bookingService = inject(BookingServiceService);
  private router = inject(Router);

  deslugify(slug: string): string {
    return slug.replace('*', '/').replace('-', ' ');
  }

  slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id') || '';
    this.id = this.deslugify(slug);
    this.startDate = this.route.snapshot.queryParamMap.get('startDate') || '';
    this.endDate = this.route.snapshot.queryParamMap.get('endDate') || '';

    this.createBookingForm = new FormGroup({
      eventName: new FormControl(''),
      genSr: new FormControl({ value: this.id, disabled: true }),
      instalationType: new FormControl(''),
      jobNumber: new FormControl(''),
      location: new FormControl(''),
      mainClient: new FormControl(''),
      numberOfDaysToHire: new FormControl(0),
      projectNumber: new FormControl(''),
      siteInfo: new FormControl(''),
      subClient: new FormControl(''),
      startDate: new FormControl({ value: this.startDate, disabled: true }),
      endDate: new FormControl({ value: this.endDate, disabled: true }),
    });
  }

  submitBookingForm() {
    const data = this.createBookingForm.getRawValue();
    this.bookingService.createBooking(data).subscribe((response) => {
      if (response) {
        const slugifiedGenSr = this.slugify(this.id);
        this.router.navigate([`/generator-detail/${slugifiedGenSr}`]);
      } else {
        alert('Error Creating a Booking');
      }
    });
  }
}
