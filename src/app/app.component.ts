import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleListComponent } from "./components/example-list/example-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExampleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dating-app';
}
