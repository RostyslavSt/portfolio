'use strict';

function View(template) {
    var self = this;

    this.templateTv = template.tv;
    this.templateRefr = template.refr;
    this.productContainer = template.productContainer;

    this.deviceList = document.querySelector('.device-list');
    this.renderDevices(this.deviceList);
    this.buttonCreator = document.querySelector(".add-device-btn");
    //select
    this.typeDevice = document.querySelector('.type-device');
    this.nameDevice = document.querySelector('.name-device') || 'no Name';
    this.parentForproducts = document.querySelector('.cooling-camera-list');

}
View.prototype.renderDevices = function() {
    var groupDevices = "";
    var oneDeviceContent = "";
    var productContent = "";
    creator.devices.forEach((function(item) {
        switch (item._type) {
            case 'tv':
                //status tv
                oneDeviceContent = this.templateTv
                    .replace('{{tv-id}}', item._id)
                    .replace('{{tv-name}}', item.name);
                // .replace('{{tv-info}}', item.toString());

                //tv chhanels
                if (item.isOn === true) {
                    // var channelTv = item.currentChannel;
                    oneDeviceContent = oneDeviceContent
                        .replace('{{current-channel}}', 'background-image: url(' + item.listChannel.channels[item.currentChannel].path)
                        .replace('{{indicator-color}}', 'border: 3px solid green')
                        .replace('channel-number', item.currentChannel + ': ' + item.listChannel.channels[item.currentChannel].name)
                        .replace('current-volume', item.volume);
                } else {
                    oneDeviceContent = oneDeviceContent
                        .replace('{{current-channel}}', '')
                        .replace('{{indicator-color}}', '');
                }

                //onOff buttons
                if (item.isOn === false) {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', 'disabled');
                    }
                } else {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', '');
                    }
                }
                groupDevices += oneDeviceContent;
                break;
            case 'refrigerator':
                //create products template
                //  create cooling
                var outputCoolingProducts = "";
                var outputFreezingProducts = "";

                item.coolingCamera.products.forEach((function(item) {
                    productContent = this.productContainer
                        .replace('{{id-product}}', item.idProduct)
                        .replace('{{name-product}}', item.nameProduct);
                    outputCoolingProducts += productContent;
                }).bind(this));
                //  create freezing
                item.freezingCamera.products.forEach((function(item) {
                    productContent = this.productContainer
                        .replace('{{id-product}}', item.idProduct)
                        .replace('{{name-product}}', item.nameProduct);
                    outputFreezingProducts += productContent;
                }).bind(this));
                //  create device
                oneDeviceContent = this.templateRefr
                    .replace('{{refr-id}}', item._id)
                    .replace('{{refr-name}}', item.name)
                    .replace('{{refr-info}}', item.toString())
                    .replace('{{cooling-camera-list}}', outputCoolingProducts)
                    .replace('{{freezing-camera-list}}', outputFreezingProducts);
                //onOff buttons
                if (item.isOn === false) {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', 'disabled');
                    }
                } else {
                    while (oneDeviceContent.indexOf('{{') > 0) {
                        oneDeviceContent = oneDeviceContent.replace('{{disabled}}', '');
                    }
                }
                groupDevices += oneDeviceContent;
                break;
        }
    }).bind(this));
    this.deviceList.innerHTML = groupDevices;
}

// in this method we synс model and view
View.prototype.renderProducts = function(idDevice, typeContainer) {
    var currentCameraList = "";
    var arrayProducts = [];
    var groupProducts = "";
    var oneProductContent = "";
    var currentDeviceInModel = {};
    var currentDeviceInDom = document.getElementById(idDevice);

    creator.devices.forEach(function(item) {
        if (idDevice === item._id) {
            currentDeviceInModel = item;
        }
    });
    switch (typeContainer) {
        case 'cooling-camera-list':
            currentCameraList = currentDeviceInDom.querySelector('.cooling-camera-list');
            arrayProducts = currentDeviceInModel.coolingCamera;
            break;
        case 'freezing-camera-list':
            currentCameraList = currentDeviceInDom.querySelector('.freezing-camera-list');
            arrayProducts = currentDeviceInModel.freezingCamera;
            break;
    }
    arrayProducts.products.forEach((function(item) {
        oneProductContent = this.productContainer
            .replace('{{id-product}}', item.idProduct)
            .replace('{{name-product}}', item.nameProduct);
        groupProducts += oneProductContent;
    }).bind(this));
    currentCameraList.innerHTML = groupProducts;
}

View.prototype.onOffButtons = function(idDevice) {
    var currentDevice = document.getElementById(idDevice);
    var buttonsDevice = currentDevice.querySelectorAll('button');
    buttonsDevice.forEach(function(item) {


    });
    console.log(idDevice);
}
View.prototype.renderChannel = function(idDevice) {
    var currentDevice = document.getElementById(idDevice);
    var $channelBox = $(currentDevice).find('.channel-box');
    $channelBox.fadeIn(1000).fadeOut(2000);
}
View.prototype.renderVolume = function(idDevice, itemVolume) {
    var currentDevice = document.getElementById(idDevice);
    var $volumeBox = $(currentDevice).find('.volume-box');
    var $volumeBlocks = $(currentDevice).find('.volume-blocks');
    $volumeBox.fadeIn(300).fadeOut(4000);
    for (var i = 0; i < itemVolume; i++) {
        $('<div class="volume-item"></div>').prependTo($volumeBlocks);
    }


}