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

  constructor(private globalState: GlobalState) {
    this.lineFeatures = globalState.getGlobalState().lineFeatures
    this.staffFeatures = globalState.getGlobalState().staffFeatures
    this.constants = Constants;
  }

  onLineColorChange($event) {
    this.globalState.setGlobalState('lineFeatures', 'strokeColor', $event.target.value)
  }

  onStrokeWidthChange($event) {
    this.globalState.setGlobalState('lineFeatures', 'strokeWidth', $event.value)
  }

}
