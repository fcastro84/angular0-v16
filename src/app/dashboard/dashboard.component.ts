import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  text = 'Dashboard';
  cd = inject(ChangeDetectorRef);

  constructor(){
    setTimeout(() => {
      this.text = 'dashboard text changed';
      this.cd.detectChanges();
    }, 5000);
  }

  handleClickParent(){
    this.text = 'dashboard text changed by click';
  }

  changedText(textChild: any) {
    console.log(textChild);
    this.text = textChild;
    }

}
