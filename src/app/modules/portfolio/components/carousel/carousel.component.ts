import { Component } from '@angular/core';
import { CarouselDirective } from './carousel-directive.directive';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselDirective],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

}
