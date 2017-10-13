import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {PaperEditorPage} from '../pages/paper-editor/paper-editor';

import {Deeplinks} from "@ionic-native/deeplinks";
import {GlobalState} from "../services/globalstate";
import {LineEditorPanelComponent} from "../components/line-editor-panel/line-editor-panel";
import {StaffEditorPanelComponent} from "../components/staff-editor-panel/staff-editor-panel";
import {StaffComponent} from "../components/staff/staff";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        PaperEditorPage,
        LineEditorPanelComponent,
        StaffEditorPanelComponent,
        StaffComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        PaperEditorPage,
        LineEditorPanelComponent,
        StaffEditorPanelComponent,
        StaffComponent
    ],
    providers: [
        Deeplinks,
        StatusBar,
        SplashScreen,
        GlobalState,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
