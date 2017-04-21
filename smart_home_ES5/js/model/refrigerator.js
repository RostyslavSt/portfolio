"use strict";

//REFRIGERATOR CLASS

function Refrigerator(name, coolingBox, freezingBox) {
    baseClass.apply(this, [name]);
    this._type = 'refrigerator';
    this.temperature = 5;
    this.coolingCamera = coolingBox;
    this.freezingCamera = freezingBox;

}

//inheritance
Refrigerator.prototype = Object.create(baseClass.prototype);
Refrigerator.prototype.constructor = Refrigerator;

//methods
Refrigerator.prototype.addProduct = function(idDevice, typeContainer, nameProduct) {
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

Refrigerator.prototype.removeProduct = function(targetDeviceId, targetCamera, targetProductId) {
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
        // debugger;
    });

}
Refrigerator.prototype.tempUp = function() {
    this.temperature++;
}
Refrigerator.prototype.tempDown = function() {
    this.temperature--;
}
Refrigerator.prototype.getTemp = function() {
    return this.temperature;
}
Refrigerator.prototype.toString = function() {
    return `State: ${this.isOn}  Temperature: ${this.temperature}`;
}


//box for cooling products
function CoolingBox() {
    this.products = [];
}


function FreezingBox() {
    this.products = [];
}