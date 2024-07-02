import { Component } from '@angular/core';
import { LeftAsideComponent } from '../left-aside/left-aside.component';
import { RightAsideComponent } from '../right-aside/right-aside.component';
import { BuilderComponent } from '../builder/builder.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LeftAsideComponent,RightAsideComponent,BuilderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
