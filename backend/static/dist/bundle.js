(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.init = function (id) {
        this.main_div = $("#" + id);
        this.draw();
    };
    App.prototype.draw = function () {
        console.log(this.main_div);
        console.log('Application started');
    };
    return App;
}());
exports.default = App;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var app = new App_1.default();
app.init('game-id');

},{"./App":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJBcHAudHMiLCJzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFBQTtJQWFBLENBQUM7SUFWRyxrQkFBSSxHQUFKLFVBQUssRUFBVTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQUksRUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTCxVQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFFRCxrQkFBZSxHQUFHLENBQUM7Ozs7O0FDaEJuQiw2QkFBd0I7QUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztBQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5jbGFzcyBBcHAge1xuICAgIG1haW5fZGl2OiBhbnk7XG4gICAgXG4gICAgaW5pdChpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWFpbl9kaXYgPSAkKGAjJHtpZH1gKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYWluX2Rpdik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbiBzdGFydGVkJyk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG52YXIgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmluaXQoJ2dhbWUtaWQnKTsiXX0=
