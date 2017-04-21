'use strict';

function Templates() {
    this.tv = `<li class="tv-container" id="{{tv-id}}">
        <div class="remove-device-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <div class="tv-and-board">
            <div class="tv-box">
                <div class="tv-screen">
                    <div class="img-styles" style="{{current-channel}}">
                        <div class="channel-box">channel-number</div>
                        <div class="volume-box">
                            <div class="volume-blocks"> current-volume</div>
                        </div>
                    </div>
                </div>
                <div class="tv-bottom">
                    <div class="tv-indicator" style="{{indicator-color}}"></div>
                </div>
            </div>
            <div class="board">
                <div class="tv-name">{{tv-name}}</div>
                <div><button type="button" name="power" class="power btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button></div>
                <div><button type="button" name="volumeOff" class="volumeOff btn btn-success btn-xs glyphicon glyphicon-volume-off {{disabled}}"></i></button></div>
                 <div><button type="button" name="nextChannel" class="nextChannel btn btn-primary btn-xs glyphicon glyphicon-step-forward {{disabled}}"></button></div>
              
                    <div class="volume-buttons">
                        <button type="button" name="volumeDown" class="volumeDown btn btn-success btn-xs glyphicon glyphicon-volume-down {{disabled}}"></i></button>
                        <button type="button" name="volumeUp" class="volumeUp btn btn-success btn-xs glyphicon glyphicon-volume-up {{disabled}}"></button>
                    </div>
               
                <div><button type="button" name="prevChannel" class="prevChannel btn btn-primary btn-xs glyphicon glyphicon-step-backward {{disabled}}"></button></div>
            </div>
        </div>
    </li>`;
    this.refr = `<li class="refr-container" id="{{refr-id}}">
        <div class="remove-device-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <h2 class="refr-header">Refrigerator</h2>
        <p class="refr-name">{{refr-name}}</p>
        <p class="refr-info">{{refr-info}}
            <span><i class="fa fa-thermometer-empty" aria-hidden="true"></i></span>
        </p>
        <p>Cooling camera
         <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
        </p>
        <div class="cooling-camera-container">
            <input class="name-product-cooling" type="text" placeholder="Enter name of product">
            <button type="button" class="add-product-cooling btn btn-sm btn-info {{disabled}}">Add product</button>
            <ul class="cooling-camera-list">
                {{cooling-camera-list}}
            </ul>
        </div>
        <p>Freezing camera
            <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
            <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
            <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
        </p>
        <div class="freezing-camera-container">
            <input class="name-product-freezing" type="text" placeholder="Enter name of product">
            <button type="button" class="add-product-freezing btn btn-sm btn-info {{disabled}}">Add product</button>
            <ul class="freezing-camera-list">
                {{freezing-camera-list}}
            </ul>
        </div>
        <button type="button" name="power" class="power btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
        <button type="button" name="tempUp" class="tempUp btn btn-success btn-xs glyphicon glyphicon-plus {{disabled}}" disable></button>
        <button type="button" name="tempDown" class="tempDown btn btn-success btn-xs glyphicon glyphicon-minus {{disabled}}"></i></button>
    </li>`;

    this.productContainer = `<li class="item-product" id={{id-product}}>
        <p class="name-product">{{name-product}}</p>
        <div class="remove-product-block"><div class="remove-product glyphicon glyphicon-remove"></div></div>
        
    </li>`;
};

var template = new Templates();