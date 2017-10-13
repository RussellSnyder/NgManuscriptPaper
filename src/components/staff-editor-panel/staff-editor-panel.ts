import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello StaffEditorPanelComponent Component');
    this.text = 'Hello World';
  }

}
