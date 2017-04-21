'use strict';

//base CLASS
class BaseClass {
    constructor(name) {
        this._id = Date.now() - 15;
        this.isOn = false;
        this.name = name || 'noName';
    }
    turnOnOff() {
        this.isOn = !this.isOn;
    }
}