import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {PaperEditorPage} from '../pages/paper-editor/paper-editor';

import { StaffComponent } from '../components/staff/staff'
import {Deeplinks} from "@ionic-native/deeplinks";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        PaperEditorPage,
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
        PaperEditorPage
    ],
    providers: [
        Deeplinks,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
