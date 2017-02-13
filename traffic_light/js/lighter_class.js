class LighterClass {
    constructor(rootElement, timeInterval) {
        this.container = document.querySelector(rootElement);
        this.circles = [];
        this.isOn = false;
        this.container.classList.add('lighter');
        this.switcher = null;
        this.timeInterval = timeInterval;
        this.interval = null;

        this.render();
        this.handleEvents();

        if (this.isOn) {
            this.addInterval();
        }

    }

    render() {
        this.createButton();
        this.createLights();
    };

    createButton() {
        this.switcher = document.createElement('div');

        this.button = document.createElement('button');
        this.button.classList.add('btn', 'btn-info', 'btn-xs');
        this.button.setAttribute('type', 'button');
        this.button.innerHTML = 'On/Off';

        this.switcher.appendChild(this.button);
        this.switcher.classList.add('lighter__switcher');

        this.container.appendChild(this.switcher);
    }

    createLights() {
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

    handleEvents() {
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

    switchOff() {
        this.circles.forEach((el) => {
            el.classList.remove('active');
        })
    }
    changeColor(el) {
        this.switchOff();
        el.classList.add('active');
    }

    addInterval() {
        let i = 0;
        this.interval = setInterval(() => {
            this.changeColor(this.circles[i]);
            if (i < 2) {
                i++;
            } else {
                i = 0;
            }
        }, this.timeInterval || 1000);
    }

    killInterval() {
        clearInterval(this.interval);
    };
}

let lighterOnClass = new LighterClass('.lighter-wrapper-3', 1100);