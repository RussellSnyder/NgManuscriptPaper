import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Constants} from "../../data/constants";
import {GlobalState} from "../../services/globalstate";

/**
 * Generated class for the PaperEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paper-editor',
  templateUrl: 'paper-editor.html',
})
export class PaperEditorPage implements OnInit {
  @ViewChild('titleContainer') titleContainer;
  @ViewChild('footerContainer') footerContainer;
  @HostListener('document:click', ['$event']) clickout(event) {
    if(!this.titleContainer.nativeElement.contains(event.target)) {
      if (this.editingTitle) {
        this.onEditText('title', false)
      }
    }
    if(!this.footerContainer.nativeElement.contains(event.target)) {
      if (this.editingFooterText) {
        this.onEditText('footer', false)
      }
    }
  }


  sizeUnits = Constants.sizeUnits;


  paperFeatures;
  staffFeatures;

  staves = [];

  editingTitle = false;
  editingFooterText = false;

  constructor(private globalState: GlobalState) {
    this.paperFeatures = this.globalState.getGlobalState().paperFeatures;
    this.staffFeatures = this.globalState.getGlobalState().staffFeatures;
    this.globalState.globalStateUpdate.subscribe(value => {

    })
  }

  ngOnInit() {
    for (let i = 0; i < this.paperFeatures.numberOfStaves; i++) {
      this.staves.push(i)
    }
  }


  onEditText(location, shouldBeEditing) {
    if (location === 'title') {
      this.editingTitle = shouldBeEditing
    }
    if (location === 'footer') {
      this.editingFooterText = shouldBeEditing
    }

  }

  onTextChange($event, location) {
    this.globalState.setGlobalState('paperFeatures', location, $event.target.value)
  }

}
