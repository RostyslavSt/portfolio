'use strict';

function Tv(name, listChannel) {
    baseClass.apply(this, [name]);
    this._type = 'tv';
    this.listChannel = listChannel || [{
            name: 'discovery',
            path: '../../img/discovery_channel.jpg'
        },
        {
            name: 'sport',
            path: '../../img/sport.jpg'
        },
    ];
    this.currentChannel = 0;
    this.volume = 4;
}
Tv.prototype = Object.create(baseClass.prototype);
Tv.prototype.constructor = Tv;
Tv.prototype.nextChannel = function() {
    if (this.currentChannel === this.listChannel.channels.length - 1) {
        this.currentChannel = 0;
    } else {
        this.currentChannel++;
    }
}
Tv.prototype.prevChannel = function() {
    if (this.currentChannel === 0) {
        this.currentChannel = this.listChannel.channels.length - 1;
    } else {
        this.currentChannel--;
    }
}
Tv.prototype.volumeUp = function() {
    this.volume++;
}
Tv.prototype.volumeDown = function() {
    if (this.volume !== 0) {
        this.volume--;
    }

}
Tv.prototype.volumeOff = function() {
    this.volume = 0;
}
Tv.prototype.toString = function() {
    // debugger;
    return `State: ${this.isOn}, Volume: ${this.volume}, Current channel: ${this.currentChannel}: ${this.listChannel.channels[this.currentChannel].name}`;
}