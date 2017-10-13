import { Injectable } from "@angular/core";
import 'rxjs/Rx';

import { Staff } from "../models/staff";
import {Line} from "../models/line";

@Injectable()
export class GlobalState {
    private globalState = {
        lineFeatures: {
            strokeWidth: 1,
            strokeColor: 'green'
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


}
