
//LAMP CLASS
function Lamp(name) {
    parentClass.apply(this, [name]);
}
Lamp.prototype = Object.create(parentClass.prototype);
Lamp.prototype.constructor = Lamp;



//CONDITIONER CLASS
function Conditioner(name) {
    parentClass.apply(this, [name]);
    this.temperature = 19;
}

Conditioner.prototype = Object.create(parentClass.prototype);
Conditioner.prototype.constructor = Conditioner;
Conditioner.prototype.tempUp = function () {
    this.temperature++;
}
parentClass.prototype.tempDown = function () {
    this.temperature--;
}
parentClass.prototype.getTemp = function () {
    return this.temperature;
}




//humidifier CLASS