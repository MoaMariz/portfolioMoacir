import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { EducationComponent } from '../../components/education/education.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { AboutmeComponent } from '../../components/aboutme/aboutme.component';
import { BackgroundComponent } from '../../components/background/background.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EducationComponent, CarouselComponent, AboutmeComponent, BackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
