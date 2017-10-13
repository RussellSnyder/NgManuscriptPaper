import {Injectable, EventEmitter, Output} from "@angular/core";
import 'rxjs/Rx';

import { Staff } from "../models/staff";
import {Line} from "../models/line";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class GlobalState {
    public globalStateUpdate = new Subject<any>();

    private globalState = {
        lineFeatures: {
            strokeWidth: 1,
            strokeColor: '#cccccc'
        },
        paperFeatures: {
            numberOfStaves: 5,
            title: 'Yes',
            footer: 'why not?'
        },
        staffFeatures: {
            numberOfLines: 5,
            spacingBetweenLines: 2,
            marginBottom: 2,
        }
    };

    constructor() {}

    getGlobalState() {
        return Object.assign({}, this.globalState);
    }

    setGlobalState(feature, key, value) {
        this.globalState[feature][key] = value;
        this.emitUpdate()
    }

    emitUpdate() {
        this.globalStateUpdate.next(this.globalState);
    }
}
