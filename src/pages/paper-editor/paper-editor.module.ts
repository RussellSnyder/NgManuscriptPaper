import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaperEditorPage } from './paper-editor';

@NgModule({
  declarations: [
    PaperEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(PaperEditorPage),
  ],
})
export class PaperEditorPageModule {}
