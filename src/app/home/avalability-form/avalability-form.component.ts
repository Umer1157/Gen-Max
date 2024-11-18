import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GeneratorServiceService } from '../../services/generatorServices/generator-service.service';
import { AvailableGenerators } from '../../models/generator';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avalability-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './avalability-form.component.html',
  styleUrl: './avalability-form.component.css',
})
export class AvalabilityFormComponent {
  generatorService = inject(GeneratorServiceService);
  availableGenerators: AvailableGenerators[] = [];

  avalabilityForm: FormGroup = new FormGroup({
    capacity: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  today: string = new Date().toISOString().split('T')[0];

  slugify(value: string): string {
    return value.replace('/', '*').replace(' ', '-');
  }

  handleSubmit() {
    const data = this.avalabilityForm.value;

    if ((data.startDate === '', data.endDate === '')) {
      alert('Please Fill Booking Date And End Date');
      return;
    }

    this.generatorService
      .getAvailableGenerator(data.startDate, data.endDate, data.capacity)
      .subscribe((data: any) => {
        this.availableGenerators = data;
      });
  }
}
