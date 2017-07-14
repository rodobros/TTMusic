import { Injectable }    from '@angular/core';
import { TimerEvent } from './TimerEvent'

@Injectable()
export class TimerEventsManagerService {
	private timerID_;
	private events : Array<TimerEvent>;
	private timerActionTime_ = 1; // in ms
	private currentTime_ = 0;
	private slowestEventTime_ = 0;
	private lastTimerActionTime_ = 0;

	constructor() {
		this.events = new Array<TimerEvent>();
	}

	public addEvent(eventName, eventFunc, eventTime) : void {
		if(!this.findEvent_(eventName)) {
			this.events.push(new TimerEvent(eventName, eventFunc, eventTime));
			this.slowestEventTime_ = eventTime > this.slowestEventTime_ ? eventTime : this.slowestEventTime_;
		}
	}

	public deleteEvent(name) {
		for (var i = 0 ; i < this.events.length ; ++i) {
			if( this.events[i].name == name) {
				this.events.splice(i, 1);
				//TODO : set slowestEventTime
			}
		}
	}

	public setEventIsExecutable(name, executable) {
		if(this.findEvent_(name)){
			this.findEvent_(name).executable = executable;
		}
	}

	public startEvents() {
		this.lastTimerActionTime_ = new Date().getTime();
		this.timerID_ = window.setInterval(() => this.timerAction_(), this.timerActionTime_);
	}

	public stopAndDestroyAllEvents() {
		this.events = new Array<TimerEvent>();
		this.slowestEventTime_ = 0;
		this.lastTimerActionTime_ = 0;
		this.currentTime_ = 0;
		window.clearInterval(this.timerID_);
	}

	private findEvent_(name) : TimerEvent {
		for (let i of this.events) {
			if( i.name == name) {
				return i;
			}
		}
		return undefined;
	}

	private timerAction_() {
		let timeNow = new Date().getTime();
		let timeSinceLastCall = timeNow - this.lastTimerActionTime_;
		this.currentTime_ += timeSinceLastCall;
		this.lastTimerActionTime_ = timeNow;
		if(this.currentTime_ > this.slowestEventTime_) {
			this.currentTime_ = this.currentTime_ - this.slowestEventTime_;
			for (let i of this.events) {
				i.numberExecutionInCurrentTimeIteration = 0;
			}
		}
		for (let i of this.events) {
			if(i.executable && (this.currentTime_ > i.eventTime * i.numberExecutionInCurrentTimeIteration)) {
				i.numberExecutionInCurrentTimeIteration++;
				i.eventFunction();
			}
		}
	}
}