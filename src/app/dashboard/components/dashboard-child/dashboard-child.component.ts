import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 *
 *
 * @export
 * @class DashboardChildComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnInit{

  @Input() text: string = '';

  /**
   *
   *
   * @param {SimpleChanges} changes
   * @memberof DashboardChildComponent
   */
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('Se cambio el dashboard-child');
    console.log(changes);
    
  }

  /**
   *
   *
   * @memberof DashboardChildComponent
   */
  ngOnInit(): void {
    console.log('inicializado dashboard-child');
  }

}
