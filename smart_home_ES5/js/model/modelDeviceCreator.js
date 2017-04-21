"use strict";

function CreateDevice() {
    this.devices = [];
}
CreateDevice.prototype.designDevice = function(type, name) {
    var newDevice = null;
    switch (type) {
        case 'tv':
            newDevice = new Tv(name, listChannels);
            this.devices.push(newDevice);
            break;
        case 'refrigerator':
            var coolingBox = new CoolingBox();
            var freezingBox = new FreezingBox();
            newDevice = new Refrigerator(name, coolingBox, freezingBox);
            this.devices.push(newDevice);
            break;
    }
}
CreateDevice.prototype.removeDevice = function(idDevice) {
    creator.devices.forEach(function(item, index) {
        if (idDevice === item._id) {
            creator.devices.splice(index, 1);
        }
    });
}