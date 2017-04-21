"use strict";

class CreateDevice {
    constructor() {
        this.devices = [];
    }

    designDevice(type, name) {
        let newDevice = null;
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
    removeDevice(idDevice) {
        creator.devices.forEach(function(item, index) {
            if (idDevice === item._id) {
                creator.devices.splice(index, 1);
            }
        });
    }
}