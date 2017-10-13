import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  sizeUnits = Constants.sizeUnits;


  paperFeatures;
  staffFeatures;

  staves = [];

  constructor(private globalState: GlobalState) {
    this.paperFeatures = this.globalState.getGlobalState().paperFeatures;
    this.staffFeatures = this.globalState.getGlobalState().staffFeatures;
    this.globalState.globalStateUpdate.subscribe(value => {
      console.log(value, 'sheeet');
    })
  }

  ngOnInit() {
    for (let i = 0; i < this.paperFeatures.numberOfStaves; i++) {
      this.staves.push(i)
    }
  }

  ionViewDidLoad() {
  }

}
