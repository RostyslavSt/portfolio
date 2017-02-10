const Lighter = function (rootElement, timeInterval) {
    let interval = null;
    let i = 0;
    this.container = document.querySelector(rootElement);
    this.circles = [];
    this.isOn = false;

    this.container.classList.add('lighter');

    this.render = function () {
        this.createButton();
        this.createLights();
    };

    this.createButton = function () {
        this.switcher = document.createElement('div');

        this.button = document.createElement('button');
        this.button.classList.add('btn', 'btn-info', 'btn-xs');
        this.button.setAttribute('type', 'button');
        this.button.innerHTML = 'On/Off';

        this.switcher.appendChild(this.button);
        this.switcher.classList.add('lighter__switcher');

        this.container.appendChild(this.switcher);
    }

    this.createLights = function () {
        for (let i = 0; i < 3; i++) {
            let element = document.createElement('div');

            element.classList.add('lighter__circle');

            this.circles.push(element);
            this.container.appendChild(element);
        }

        this.circles[0].classList.add('lighter__circle_red');
        this.circles[1].classList.add('lighter__circle_yellow');
        this.circles[2].classList.add('lighter__circle_green');
    }

    this.handleEvents = function () {
        this.circles.forEach((el) => {
            el.addEventListener('click', () => {
                if (this.isOn) {
                    this.changeColor(el);
                }
            });
        });
        this.switcher.addEventListener('click', () => {
            this.isOn = !this.isOn;

            if (this.isOn) {
                this.addInterval();
            } else {
                this.switchOff();
                this.killInterval();
            }

            this.container.classList.toggle('lighter_active');
        })
    }

    this.switchOff = function () {
        this.circles.forEach((el) => {
            el.classList.remove('active');
        })
    }
    this.changeColor = function (el) {
        this.switchOff();
        el.classList.add('active');
    }

    this.addInterval = function () {
        interval = setInterval(() => {
            this.changeColor(this.circles[i]);
            if (i < 2) {
                i++;
            } else {
                i = 0;
            }
        }, timeInterval || 1000);
    }

    this.killInterval = function () {
        clearInterval(interval);
    };

    this.render();
    this.handleEvents();
    if (this.isOn) {
        this.addInterval();
    }
};

const lighter = new Lighter('.lighter-wrapper', 300);
const lighter2 = new Lighter('.lighter-wrapper-2', 1000);
const lighter3 = new Lighter('.lighter-wrapper-3', 1500);