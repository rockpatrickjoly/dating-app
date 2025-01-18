import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleService } from '../../services/example.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-example-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit, OnDestroy {
  examples: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getExamples().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.examples = data;
      },
      error: (err) => {
        console.error('Error fetching examples:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
