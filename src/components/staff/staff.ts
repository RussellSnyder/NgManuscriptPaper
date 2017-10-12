import {Component, Input, OnInit} from '@angular/core';
import { Staff } from '../../models/staff';
import { Line } from '../../models/line';
import { Constants } from '../../data/constants';
/**
 * Generated class for the StaffComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff',
  templateUrl: 'staff.html'
})
export class StaffComponent implements OnInit{
  @Input() staffFeatures;

  sizeUnits = Constants.sizeUnits;

  lineFeatures = {
    strokeWidth: 1,
    strokeColor: 'red',
  }

  lines: Line[] = [];
  staves = [];
  staffHeight;

  constructor() {

  }

  ngOnInit() {
    for (let i = 0; i < this.staffFeatures.numberOfLines; i++) {
      this.lines.push(this.lineFeatures)
    }

    this.staffHeight = (this.staffFeatures.spacingBetweenLines * this.staffFeatures.numberOfLines)
  }
}
