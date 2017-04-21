'use strict';

//model objects
let tvModel = new Tv();
let refrModel = new Refrigerator();

//device's creator
let creator = new CreateDevice();

//view objects
let view = new View(template);

//controller
let controller = new Controller(tvModel, refrModel, view, creator);