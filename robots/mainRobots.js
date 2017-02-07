// BATTLEGROUND
function Battleground() {
	this.round = 0;
	this.robots = [];
}
Battleground.prototype.addRobot = function(robot) {
	this.robots.push(robot);
	
}

Battleground.prototype.startBattle = function() { // to do


}
Battleground.prototype.size = function() {
	return this.robots.length;
}
Battleground.prototype.randomRobot = function(currentRobot) {
  var robot;
  do {
    robot = getRandom(0, (this.robots.length - 1));
  } while(robot == currentRobot);
   return robot;
}


// Battleground.prototype.checkDeadRobots = function(rob, rob2) {
// 	if (rob.health <= 0) { 
// 		console.log('  CRASH!!! - ' + rob.name + ' is destroyed and out of the game');
// 		rob.alive = false;
// 		// console.log(bg.robots[indexRobot].alive);
// 		countAliveRobots--;
// 		if (countAliveRobots === 1) {
// 		console.log('--------- ' + rob2.name + ' WINS!!!! -----------')
// 		exitLoop = false;
// 		break;
// 		}
// 	}
// }	


// ROBOT
	function Robot(name) {
		this.name = name;
		this.alive = true;
		this.health = Math.floor(Math.random() * 31 + 20);
		this.weapon = makeWeapon();
	}

	Robot.prototype.attack = function() {  //to do


	}
	Robot.prototype.receiveDamage = function(points) {


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
	  var type = Math.round(Math.random()) == 0 ? 'single' : 'area';
	      power = getRandom(5, 20);

	  return new Weapon(type, power);
	}

//makeBattle
function makeBattle(robotCount) {
	var bg = new Battleground();
	var round = 1;
	var newRobot;
	var healthRobot;
	var exitLoop = true; // condition of exit from the loop battle
	var countAliveRobots;
	var indexRobot;
	
	for (var i = 0; i < robotCount; i++) { //create array with robots
		newRobot = new Robot('Rob_' + (i+1));
		bg.addRobot(newRobot);
	}
	countAliveRobots = bg.robots.length;
	console.log('On the BATTLEGROUND are ' + bg.robots.length + ' robots!');
	while (exitLoop) {
		for (var i = 0; i < bg.robots.length; i++) { //begining the battle
			if (bg.robots[i].alive == true) {

				console.log('ROUND ' + round + '. FIGHT!!!');
				console.log(' ' + bg.robots[i].name + ' is ATTACK with ' + bg.robots[i].weapon.power + 
							' power ' + bg.robots[i].weapon.type + ' damage!');
				
				if (bg.robots[i].weapon.type === 'single') { //single damage
					do {
						indexRobot = bg.randomRobot(i); //index number of random robot
					} while (bg.robots[indexRobot].alive == false);
					
					console.log(' ' + bg.robots[indexRobot].name + ' receives ' + bg.robots[i].weapon.power + 
										' points damage');
					console.log('  health of ' + bg.robots[indexRobot].name + ' before damage ' + 
										'= ' + bg.robots[indexRobot].health);
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
					for (var j = 0; j < bg.robots.length; j++) {
						if (bg.robots[i].name !== bg.robots[j].name && bg.robots[j].alive == true) {
							console.log(' ' + bg.robots[j].name + ' receives ' + bg.robots[i].weapon.power + 
										' points damage');
							console.log('  health of ' + bg.robots[j].name + ' before damage ' + 
											'= ' + bg.robots[j].health);
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

