"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TimerEventsManager = (function () {
    function TimerEventsManager() {
        this.timerActionTime_ = 1; // in ms
        this.currentTime_ = 0;
    }
    TimerEventsManager.prototype.addEvent = function (eventName, eventFunc, eventTime) {
        if (!this.findEvent_(eventName)) {
            this.events.push(eventFunc, eventFunc, eventTime);
        }
    };
    TimerEventsManager.prototype.deleteEvent = function (name) {
        for (var i = 0; i < this.events.length; ++i) {
            if (this.events[i].name == name) {
                this.events.splice(i, 1);
            }
        }
    };
    TimerEventsManager.prototype.setEventIsExecutable = function (name, executable) {
        this.findEvent_(name).executable = executable;
    };
    TimerEventsManager.prototype.startEvents = function () {
        var _this = this;
        this.timerID_ = setInterval(function () { return _this.timerAction_(); }, this.timerActionTime_);
    };
    TimerEventsManager.prototype.stopAllEvents = function () {
        clearInterval(this.timerID_);
    };
    TimerEventsManager.prototype.findEvent_ = function (name) {
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.name == name) {
                return i;
            }
        }
        return undefined;
    };
    TimerEventsManager.prototype.timerAction_ = function () {
        this.currentTime_ += this.timerActionTime_;
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.executable && (this.currentTime_ % i.eventTime == 0)) {
                i.eventFunction();
            }
        }
    };
    TimerEventsManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimerEventsManager);
    return TimerEventsManager;
}());
exports.TimerEventsManager = TimerEventsManager;
//# sourceMappingURL=TimerEventsManager.js.map