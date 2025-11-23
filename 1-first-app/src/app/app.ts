import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BindingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1-first-app');
}
