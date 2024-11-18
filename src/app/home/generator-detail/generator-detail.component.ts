import { Component, inject, OnInit } from '@angular/core';
import { GeneratorServiceService } from '../../services/generatorServices/generator-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generator-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generator-detail.component.html',
  styleUrl: './generator-detail.component.css',
})
export class GeneratorDetailComponent implements OnInit {
  generatorService = inject(GeneratorServiceService);

  generatorData: {
    genSr: string;
    bookings: [
      {
        id: number;
        eventName: string;
        genSr: string;
        instalationType: string;
        jobNumber: string;
        location: string;
        mainClient: string;
        numberOfDaysToHire: number;
        projectNumber: string;
        siteInfo: string;
        subClient: string;
        startDate: string;
        endDate: string;
      }
    ];
  } = {
    genSr: '',
    bookings: [
      {
        id: 0,
        eventName: '',
        genSr: '',
        instalationType: '',
        jobNumber: '',
        location: '',
        mainClient: '',
        numberOfDaysToHire: 0,
        projectNumber: '',
        siteInfo: '',
        subClient: '',
        startDate: '',
        endDate: '',
      },
    ],
  };

  avalableDates: {
    genSrId: string;
    availableDates: [
      {
        start: string;
        end: string;
      }
    ];
  } = {
    genSrId: '',
    availableDates: [
      {
        start: '',
        end: '',
      },
    ],
  };

  route = inject(ActivatedRoute);

  slugify(value: string): string {
    return value.replace('/', '*').replace(' ', '-');
  }

  deslugify(slug: string): string {
    return slug.replace('*', '/').replace('-', ' ');
  }

  getData(id: string) {
    this.generatorService.getGeneratorData().subscribe((data: any) => {
      const allGenerators = data.flatMap((item: any) => item.generators);
      const generator = allGenerators.find(
        (item: any) => item.genSr && this.slugify(item.genSr) === id
      );

      if (generator) {
        this.generatorData = generator;
      } else {
        console.error(`No generator found with slug: ${id}`);
      }
    });
  }

  getAvalableDates(id: string) {
    this.generatorService.getAvalableDates(id).subscribe((data: any) => {
      if (data) {
        this.avalableDates = data;
      }
      console.log('Dates DATA -->', this.avalableDates);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('genSr') || '';
    this.getData(id);
    const serailNumber = this.deslugify(id);
    this.getAvalableDates(serailNumber);
  }
}
