'use stritct';

// ['discovery', 'sport', 'science', 'education', 'music', 'fishing', 'motosport', 'formula 1'];
function TvChannels() {
    this.mainPath = './img/';
    this.channels = [{
            name: 'discovery',
            path: this.mainPath + 'discovery_channel.jpg'
        },
        {
            name: 'sport',
            path: this.mainPath + 'sport.jpg'
        },
        {
            name: 'science',
            path: this.mainPath + 'science.jpg'
        },
        {
            name: 'education',
            path: this.mainPath + 'Education-channel.jpg'
        },
        {
            name: 'music',
            path: this.mainPath + 'music.jpg'
        },
        {
            name: 'fishing',
            path: this.mainPath + 'fishing.jpg'
        },
        {
            name: 'motosport',
            path: this.mainPath + 'motosport.jpg'
        },
        {
            name: 'formula 1',
            path: this.mainPath + 'formula1.jpg'
        },
        {
            name: 'Animals',
            path: this.mainPath + 'cat.jpg'
        },
        {
            name: 'Films',
            path: this.mainPath + 'transformers.jpg'
        },
        {
            name: 'Films 2',
            path: this.mainPath + 'last_knight.jpg'
        }
    ]
}

var listChannels = new TvChannels();