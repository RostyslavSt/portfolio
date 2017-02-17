// BATTLEGROUND
function Battleground() {
    this.round = 0;
    this.robots = [];
}
Battleground.prototype.addRobot = function (robot) {
    this.robots.push(robot);

}
Battleground.prototype.size = function () {
    return this.robots.length;
}
Battleground.prototype.randomRobot = function (currentRobot) {
    let robot;
    do {
        robot = getRandom(0, (this.robots.length - 1));
    } while (robot == currentRobot);
    return robot;
}

// ROBOT
function Robot(name) {
    this.name = name;
    this.alive = true;
    this.health = Math.floor(Math.random() * 31 + 20);
    this.weapon = makeWeapon();
}

// WEAPON
function Weapon(type, power) {
    this.type = type;
    this.power = power;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeWeapon() {
    let type = Math.round(Math.random()) == 0 ? 'single' : 'area';
    power = getRandom(5, 20);

    return new Weapon(type, power);
}

//render into console
function renderToConsole(robot, robotWeaponPower, robotHealth) {
    console.log(' ' + robot + ' receives ' + robotWeaponPower +
        ' points damage');
    console.log('  health of ' + robot + ' before damage ' +
        '= ' + robotHealth);
}

//render
let body = document.querySelector('body');
let renderBattle = (round) => {
    let battleRound = document.createElement('div');
    battleRound.innerHTML = 'ROUND ' + round + '. FIGHT!!!';
    body.appendChild(battleRound);
}

//makeBattle
function makeBattle(robotCount) {
    let bg = new Battleground();
    let round = 1;
    let newRobot;
    let healthRobot;
    let exitLoop = true; // condition of exit from the loop battle
    let countAliveRobots;
    let indexRobot;

    for (let i = 0; i < robotCount; i++) { //create array with robots
        newRobot = new Robot('Rob_' + (i + 1));
        bg.addRobot(newRobot);
    }
    countAliveRobots = bg.robots.length;
    console.log('On the BATTLEGROUND are ' + bg.robots.length + ' robots!');
    while (exitLoop) {
        for (let i = 0; i < bg.robots.length; i++) { //begining the battle
            if (bg.robots[i].alive == true) {
                console.log('ROUND ' + round + '. FIGHT!!!');
                // renderBattle(round);
                console.log(' ' + bg.robots[i].name + ' is ATTACK with ' + bg.robots[i].weapon.power +
                    ' power ' + bg.robots[i].weapon.type + ' damage!');

                if (bg.robots[i].weapon.type === 'single') { //single damage
                    do {
                        indexRobot = bg.randomRobot(i); //index number of random robot
                    } while (bg.robots[indexRobot].alive == false);
                    renderToConsole(bg.robots[indexRobot].name, bg.robots[i].weapon.power, bg.robots[indexRobot].health);

                    bg.robots[indexRobot].health = bg.robots[indexRobot].health -
                        bg.robots[i].weapon.power;
                    console.log('  health of ' + bg.robots[indexRobot].name + ' after damage ' +
                        '= ' + bg.robots[indexRobot].health);


                    // bg.checkDeadRobots(bg.robots[indexRobot], bg.robots[i]);				
                    if (bg.robots[indexRobot].health <= 0) {
                        console.log('  CRASH!!! - ' + bg.robots[indexRobot].name + ' is destroyed and out of the game');
                        bg.robots[indexRobot].alive = false;
                        // console.log(bg.robots[indexRobot].alive);
                        countAliveRobots--;
                        if (countAliveRobots === 1) {
                            console.log('--------- ' + bg.robots[i].name + ' WINS!!!! -----------')
                            exitLoop = false;
                            break;
                        }
                    }

                } else { //area damage
                    for (let j = 0; j < bg.robots.length; j++) {
                        if (bg.robots[i].name !== bg.robots[j].name && bg.robots[j].alive == true) {
                            renderToConsole(bg.robots[j].name, bg.robots[i].weapon.power, bg.robots[j].health);

                            bg.robots[j].health = bg.robots[j].health - bg.robots[i].weapon.power;
                            console.log('  health of ' + bg.robots[j].name + ' after damage ' +
                                '= ' + bg.robots[j].health);

                            if (bg.robots[j].health <= 0) { //deleting robots from array if destroyed
                                console.log('  CRASH!!! - ' + bg.robots[j].name + ' is destroyed and out of the game');
                                bg.robots[j].alive = false;
                                // console.log(bg.robots[indexRobot].alive);
                                countAliveRobots--;
                                if (countAliveRobots === 1) {
                                    console.log('--------- ' + bg.robots[i].name + ' WINS!!!! -----------')
                                    exitLoop = false;
                                    break;
                                }
                            }
                        }

                    }
                }
                round++;
            } //if robot alive
            if (countAliveRobots === 1) {
                break;
            }
        } // for

    } // while	

} //function battle

let button = document.querySelector('.my-button');
button.addEventListener('click', () => {
    makeBattle(5);
    let $transformers = $('.img-block');
    let $autobot = $('.autobot');
    $transformers.fadeOut(2000, () => {
        $autobot.fadeIn(1500);
    })
});




//   console.log(' ' + bg.robots[indexRobot].name + ' receives ' + bg.robots[i].weapon.power +
//                         ' points damage');
//                     console.log('  health of ' + bg.robots[indexRobot].name + ' before damage ' +
//                         '= ' + bg.robots[indexRobot].health);
//                     bg.robots[indexRobot].health = bg.robots[indexRobot].health -
//                         bg.robots[i].weapon.power;
//                     console.log('  health of ' + bg.robots[indexRobot].name + ' after damage ' +
//                         '= ' + bg.robots[indexRobot].health);




// console.log(' ' + bg.robots[j].name + ' receives ' + bg.robots[i].weapon.power +
//     ' points damage');
// console.log('  health of ' + bg.robots[j].name + ' before damage ' +
//     '= ' + bg.robots[j].health);
// bg.robots[j].health = bg.robots[j].health - bg.robots[i].weapon.power;
// console.log('  health of ' + bg.robots[j].name + ' after damage ' +
//     '= ' + bg.robots[j].health);