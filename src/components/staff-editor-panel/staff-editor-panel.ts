import { Component } from '@angular/core';
import {GlobalState} from "../../services/globalstate";
import {Constants} from "../../data/constants";

/**
 * Generated class for the StaffEditorPanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff-editor-panel',
  templateUrl: 'staff-editor-panel.html'
})
export class StaffEditorPanelComponent {
  lineFeatures;
  staffFeatures;
  constants;

  constructor(private globalState: GlobalState) {
    this.lineFeatures = globalState.getGlobalState().lineFeatures
    this.staffFeatures = globalState.getGlobalState().staffFeatures
    this.constants = Constants;
  }

  onNumberOfLinesChange($event) {
    this.globalState.setGlobalState('staffFeatures', 'numberOfLines', parseInt($event.value))
  }

  onSpacingBetweenLinesChange($event) {
    this.globalState.setGlobalState('staffFeatures', 'spacingBetweenLines', parseInt($event.value))
  }

  onSpacingBetweenStavesChange($event) {
    this.globalState.setGlobalState('staffFeatures', 'marginBottom', parseInt($event.value))
  }

}
