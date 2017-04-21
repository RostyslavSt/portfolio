'use strict';

class Tv extends BaseClass {
    constructor(name, listChannel) {
        super(name);
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
    nextChannel() {
        if (this.currentChannel === this.listChannel.channels.length - 1) {
            this.currentChannel = 0;
        } else {
            this.currentChannel++;
        }
    }
    prevChannel() {
        if (this.currentChannel === 0) {
            this.currentChannel = this.listChannel.channels.length - 1;
        } else {
            this.currentChannel--;
        }
    }
    volumeUp() {
        this.volume++;
    }
    volumeDown() {
        if (this.volume !== 0) {
            this.volume--;
        }
    }
    volumeOff() {
        this.volume = 0;
    }
    toString() {
        return `State: ${this.isOn}, Volume: ${this.volume}, Current channel: ${this.currentChannel}: ${this.listChannel.channels[this.currentChannel].name}`;
    }

}