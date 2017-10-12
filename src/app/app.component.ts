import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, NavController} from 'ionic-angular';
import {Deeplinks} from "@ionic-native/deeplinks";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {PaperEditorPage} from '../pages/paper-editor/paper-editor';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = PaperEditorPage;

    constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    ngAfterViewInit() {
        this.platform.ready().then(() => {

        })
    }
}

