import { Component } from '@angular/core';
import { GlobalState } from '../../services/globalstate'


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

  constructor(private globalState: GlobalState) {

  }

  onLineColorEdit(color) {

  }

}
