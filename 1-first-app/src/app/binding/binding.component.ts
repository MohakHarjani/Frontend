import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  name : string = 'Mohak';
  subject : string = 'Maths'
  marks : number = 43;
  classes = ['red', 'bold', 'border']

  changeSubject()
  {
    this.subject = 'Science'
  }

  onClick(event : MouseEvent)
  {
    console.log(event.target)
    // alert('You clicked me ?')

  }

}
