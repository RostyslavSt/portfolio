'use strict';

//base CLASS
function baseClass(name) {
    this._id = Date.now() - 15;
    this.isOn = false;
    this.name = name || 'noName';
}
baseClass.prototype.turnOnOff = function() {
    this.isOn = !this.isOn;
}