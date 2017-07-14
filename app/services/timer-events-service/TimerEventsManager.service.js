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
var TimerEvent_1 = require('./TimerEvent');
var TimerEventsManagerService = (function () {
    function TimerEventsManagerService() {
        this.timerActionTime_ = 1; // in ms
        this.currentTime_ = 0;
        this.slowestEventTime_ = 0;
        this.lastTimerActionTime_ = 0;
        this.events = new Array();
    }
    TimerEventsManagerService.prototype.addEvent = function (eventName, eventFunc, eventTime) {
        if (!this.findEvent_(eventName)) {
            this.events.push(new TimerEvent_1.TimerEvent(eventName, eventFunc, eventTime));
            this.slowestEventTime_ = eventTime > this.slowestEventTime_ ? eventTime : this.slowestEventTime_;
        }
    };
    TimerEventsManagerService.prototype.deleteEvent = function (name) {
        for (var i = 0; i < this.events.length; ++i) {
            if (this.events[i].name == name) {
                this.events.splice(i, 1);
            }
        }
    };
    TimerEventsManagerService.prototype.setEventIsExecutable = function (name, executable) {
        if (this.findEvent_(name)) {
            this.findEvent_(name).executable = executable;
        }
    };
    TimerEventsManagerService.prototype.startEvents = function () {
        var _this = this;
        this.lastTimerActionTime_ = new Date().getTime();
        this.timerID_ = window.setInterval(function () { return _this.timerAction_(); }, this.timerActionTime_);
    };
    TimerEventsManagerService.prototype.stopAndDestroyAllEvents = function () {
        this.events = new Array();
        this.slowestEventTime_ = 0;
        this.lastTimerActionTime_ = 0;
        this.currentTime_ = 0;
        window.clearInterval(this.timerID_);
    };
    TimerEventsManagerService.prototype.findEvent_ = function (name) {
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.name == name) {
                return i;
            }
        }
        return undefined;
    };
    TimerEventsManagerService.prototype.timerAction_ = function () {
        var timeNow = new Date().getTime();
        var timeSinceLastCall = timeNow - this.lastTimerActionTime_;
        this.currentTime_ += timeSinceLastCall;
        this.lastTimerActionTime_ = timeNow;
        if (this.currentTime_ > this.slowestEventTime_) {
            this.currentTime_ = this.currentTime_ - this.slowestEventTime_;
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var i = _a[_i];
                i.numberExecutionInCurrentTimeIteration = 0;
            }
        }
        for (var _b = 0, _c = this.events; _b < _c.length; _b++) {
            var i = _c[_b];
            if (i.executable && (this.currentTime_ > i.eventTime * i.numberExecutionInCurrentTimeIteration)) {
                i.numberExecutionInCurrentTimeIteration++;
                i.eventFunction();
            }
        }
    };
    TimerEventsManagerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimerEventsManagerService);
    return TimerEventsManagerService;
}());
exports.TimerEventsManagerService = TimerEventsManagerService;
//# sourceMappingURL=TimerEventsManager.service.js.map