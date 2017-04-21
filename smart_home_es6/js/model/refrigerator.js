"use strict";

//REFRIGERATOR CLASS

class Refrigerator extends BaseClass {
    constructor(name, coolingBox, freezingBox) {
            super(name);
            this._type = 'refrigerator';
            this.temperature = 5;
            this.coolingCamera = coolingBox;
            this.freezingCamera = freezingBox;
        }
        //methods
    addProduct(idDevice, typeContainer, nameProduct) {
        var newProduct = {};
        newProduct.nameProduct = nameProduct;
        newProduct.idProduct = Date.now() - 10000;
        creator.devices.forEach(function(item) {
            if (item._id === idDevice) {
                if (item.isOn === true) {
                    switch (typeContainer) {
                        case ('cooling-camera-list'):
                            item.coolingCamera.products.push(newProduct);
                            break;
                        case ('freezing-camera-list'):
                            item.freezingCamera.products.push(newProduct);
                            break;
                    }
                }
            }
        });
    }

    removeProduct(targetDeviceId, targetCamera, targetProductId) {
        creator.devices.forEach(function(item, index) {
            if (targetDeviceId === item._id) {
                switch (targetCamera) {
                    case ('cooling-camera-list'):
                        item.coolingCamera.products.forEach(function(itemModel, index) {
                            if (targetProductId === itemModel.idProduct) {
                                item.coolingCamera.products.splice(index, 1);
                            }
                        });
                        break;
                    case ('freezing-camera-list'):
                        item.freezingCamera.products.forEach(function(itemModel, index) {
                            if (targetProductId === itemModel.idProduct) {
                                item.freezingCamera.products.splice(index, 1);
                            }
                        });
                        break;
                }
            }
        });
    }
    tempUp() {
        this.temperature++;
    }
    tempDown() {
        this.temperature--;
    }
    getTemp() {
        return this.temperature;
    }
    toString() {
        return `State: ${this.isOn}  Temperature: ${this.temperature}`;
    }
}

//box for cooling products
class CoolingBox {
    constructor() {
        this.products = [];
    }
}
class FreezingBox {
    constructor() {
        this.products = [];
    }
}