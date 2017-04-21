'use strict';

//model objects
var tvModel = new Tv();
var refrModel = new Refrigerator();

//device's creator
var creator = new CreateDevice();



//view objects
var view = new View(template);

//controller
var controller = new Controller(tvModel, refrModel, view, creator);