import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleListComponent } from './components/example-list/example-list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ExampleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dating-app';
}
