import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-left-aside',
  standalone: true,
  imports: [CdkAccordionModule, CommonModule],
  templateUrl: './left-aside.component.html',
  styleUrl: './left-aside.component.scss'
})
export class LeftAsideComponent {
  // items = ['Basic', 'Advanced', 'Layout', 'Data', 'Premium'];
  items = [
    { title: 'Basic', body: '', active: false },
    { title: 'Advanced', body: '', active: false },
    { title: 'Layout', body: '', active: false },
    { title: 'Data', body: '', active: false },
    { title: 'Premium', body: '', active: false }
  ];

  expandedIndex = 0;


}
