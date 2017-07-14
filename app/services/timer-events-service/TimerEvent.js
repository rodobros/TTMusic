"use strict";
var TimerEvent = (function () {
    function TimerEvent(eventName, eventFunc, eventTime) {
        this.executable = true;
        this.numberExecutionInCurrentTimeIteration = 0;
        this.name = eventName;
        this.eventFunction = eventFunc;
        this.eventTime = eventTime;
    }
    return TimerEvent;
}());
exports.TimerEvent = TimerEvent;
//# sourceMappingURL=TimerEvent.js.map