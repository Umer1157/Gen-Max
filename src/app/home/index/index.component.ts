import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GeneratorServiceService } from '../../services/generatorServices/generator-service.service';
import { AllGenerators } from '../../models/generator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  generatorService = inject(GeneratorServiceService);
  generatorData: AllGenerators[] = [];

  getData() {
    this.generatorService.getGeneratorData().subscribe((data: any) => {
      this.generatorData = data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  dropdownOpen: { [key: string]: boolean } = {};

  toggleDropdown(itemId: string): void {
    this.dropdownOpen[itemId] = !this.dropdownOpen[itemId];
  }

  slugify(value: string): string {
    return value.replace('/', '*').replace(' ', '-');
  }
}
