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

  staffOptionsShowing = false;

  allowNumberofLinesDecrease;
  allowNumberofLinesIncrease;

  allowSpacingBetweenLinesIncrease = true;
  allowSpacingBetweenLinesDecrease = true;

  allowMarginBottomIncrease = true;
  allowMarginBottomDecrease = true;

  constructor(private globalState: GlobalState) {
    this.lineFeatures = globalState.getGlobalState().lineFeatures
    this.staffFeatures = globalState.getGlobalState().staffFeatures
    this.constants = Constants;
    this.setDisabledStates();

    this.globalState.globalStateUpdate.subscribe(value => {
      this.lineFeatures = value.lineFeatures;
      this.staffFeatures = value.staffFeatures;
      this.setDisabledStates();
    })
  }

  onNumberOfLinesChange(direction) {
    this.globalState.setGlobalState('staffFeatures', 'numberOfLines', this.staffFeatures.numberOfLines + direction)
    this.setNumberOfLinesButtonDisableState();
  }

  onSpacingBetweenLinesChange(direction) {
    this.globalState.setGlobalState('staffFeatures', 'spacingBetweenLines', this.staffFeatures.spacingBetweenLines + direction)
    this.setSpacingBetweenLinesButtonDisableState();
  }

  onSpacingBetweenStavesChange(direction) {
    this.globalState.setGlobalState('staffFeatures', 'marginBottom', this.staffFeatures.marginBottom + direction)
    this.setSpacingBetweenStavesDisableState();
  }

  setDisabledStates() {
    this.setNumberOfLinesButtonDisableState();
    this.setSpacingBetweenLinesButtonDisableState();
    this.setSpacingBetweenStavesDisableState();
  }

  setNumberOfLinesButtonDisableState() {
      this.allowNumberofLinesDecrease = (this.staffFeatures.numberOfLines > 1)
      this.allowNumberofLinesIncrease = (this.staffFeatures.numberOfLines < 10)
  }

  setSpacingBetweenLinesButtonDisableState() {
    this.allowSpacingBetweenLinesDecrease = this.staffFeatures.spacingBetweenLines > 1;
    this.allowSpacingBetweenLinesIncrease = this.staffFeatures.spacingBetweenLines < 10;
  }

  setSpacingBetweenStavesDisableState() {
    this.allowMarginBottomDecrease = this.staffFeatures.marginBottom > 0;
    this.allowMarginBottomIncrease = this.staffFeatures.marginBottom < 20;
  }
}
