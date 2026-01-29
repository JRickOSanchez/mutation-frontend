import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stats: {
    count_mutations: number;
    count_no_mutation: number;
    ratio: number;
  } | null = null;

  samples: {
    date: string;
    dna: string[];
    result: string;
  }[] = [];

  loading = true;
  error = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log('Dashboard cargado');

    this.loadStats();
    this.loadSamples();
  }

  private loadStats(): void {
    this.api.getStats().subscribe({
      next: (data: any) => (this.stats = data),
      error: () => (this.error = true),
    });
  }

  private loadSamples(): void {
    this.api.getLastSamples().subscribe({
      next: (data: any[]) => {
        this.samples = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}
