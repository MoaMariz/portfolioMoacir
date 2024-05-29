import { Component, signal } from '@angular/core';
//Interface
import { ISkills } from '../../interface/ISkills.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public arraySkills = signal<ISkills[]>([
    {
      src:'assets/icons/angular.svg',
      alt:'Angular icon'
    },
    {
      src:'assets/icons/javascript.svg',
      alt:'JS icon'
    },
    {
      src:'assets/icons/node-js.svg',
      alt:'NodeJS icon'
    },
    {
      src:'assets/icons/python.svg',
      alt:'Python icon'
    },
    {
      src:'assets/icons/html-5.svg',
      alt:'Html5 icon'
    },
    {
      src:'assets/icons/bootstrap.svg',
      alt:'Bootstrap icon'
    },
    {
      src:'assets/icons/css-3.svg',
      alt:'CSS3 icon'
    },
    {
      src:'assets/icons/sass.svg',
      alt:'Sass icon'
    },
    {
      src:'assets/icons/mysql.svg',
      alt:'MySQL icon'
    }
  ])

}
