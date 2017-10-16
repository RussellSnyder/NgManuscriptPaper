import { Component } from '@angular/core';
import { GlobalState } from '../../services/globalstate'
import { Constants } from '../../data/constants'


/**
 * Generated class for the LineEditorPanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'line-editor-panel',
  templateUrl: 'line-editor-panel.html'
})
export class LineEditorPanelComponent {
  lineFeatures;
  staffFeatures;
  constants;

  allowStrokeWidthDecrease = false;
  allowStrokeWidthIncrease = true;

  lineEditorShowing = false;

  constructor(private globalState: GlobalState) {
    this.lineFeatures = globalState.getGlobalState().lineFeatures
    this.staffFeatures = globalState.getGlobalState().staffFeatures
    this.constants = Constants;
    this.setStrokeWidthButtonDisableState();
    this.globalState.globalStateUpdate.subscribe(value => {
      this.lineFeatures = value.lineFeatures;
      this.staffFeatures = value.staffFeatures;
      this.setStrokeWidthButtonDisableState();
    })

  }

  onLineColorChange($event) {
    this.globalState.setGlobalState('lineFeatures', 'strokeColor', $event.target.value)
  }

  onStrokeWidthChange(direction) {
    this.globalState.setGlobalState('lineFeatures', 'strokeWidth', this.lineFeatures.strokeWidth + direction)
    this.setStrokeWidthButtonDisableState()
  }

  setStrokeWidthButtonDisableState() {
      this.allowStrokeWidthDecrease = this.lineFeatures.strokeWidth > 1;
      this.allowStrokeWidthIncrease = this.lineFeatures.strokeWidth < this.staffFeatures.spacingBetweenLines;
  }
}
