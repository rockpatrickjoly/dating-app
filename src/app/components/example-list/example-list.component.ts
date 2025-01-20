import { Component, OnInit } from '@angular/core';
import { ExampleService, Example } from '../../services/example.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css'],
})
export class ExampleListComponent implements OnInit {
  examples: Example[] = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getExamples().subscribe(
      (data) => (this.examples = data),
      (error) => console.error('Error fetching examples:', error)
    );
  }
}
