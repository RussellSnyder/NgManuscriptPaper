import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constants} from "../../data/constants";

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
export class PaperEditorPage {
  sizeUnits = Constants.sizeUnits;


  paperFeatures = {
    numberOfStaves: 5,
    title: 'Yes',
    footer: 'why not?'
  }

  staffFeatures = {
    numberOfLines: 5,
    spacingBetweenLines: 2,
    marginBottom: 2,
  };



  staves = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < this.paperFeatures.numberOfStaves; i++) {
      this.staves.push(this.staffFeatures)
    }
  }

  ionViewDidLoad() {
  }

}
