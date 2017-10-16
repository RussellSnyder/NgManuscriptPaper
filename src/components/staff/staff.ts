import {Component, OnInit} from '@angular/core';
import { Line } from '../../models/line';
import { Constants } from '../../data/constants';
import { GlobalState } from '../../services/globalstate'

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
  sizeUnits = Constants.sizeUnits;

  lineFeatures;
  staffFeatures;

  lines: Line[] = [];
  staffHeight;

  constructor(private globalState: GlobalState) {
    this.lineFeatures = this.globalState.getGlobalState().lineFeatures;
    this.staffFeatures = this.globalState.getGlobalState().staffFeatures;
    this.updateStaffHeight();
    this.updateLines();

    this.globalState.globalStateUpdate.subscribe((globalState) => {
      this.lineFeatures = globalState.lineFeatures;
      this.staffFeatures = globalState.staffFeatures;
      this.updateStaffHeight()
      this.updateLines();
    })
  }

  ngOnInit() {
  }

  updateLines() {
    this.lines = [];
    for (let i = 0; i < this.staffFeatures.numberOfLines; i++) {
      this.lines.push(this.lineFeatures)
    }

  }

  updateStaffHeight() {
    this.staffHeight = this.staffFeatures.spacingBetweenLines * this.staffFeatures.numberOfLines
  }
}
