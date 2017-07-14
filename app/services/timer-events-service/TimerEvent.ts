export class TimerEvent {
	constructor(eventName, eventFunc, eventTime) {
		this.name = eventName;
		this.eventFunction = eventFunc;
		this.eventTime = eventTime;
	}
	public name;
	public eventFunction;
	public eventTime;
	public executable = true;
	public numberExecutionInCurrentTimeIteration = 0;
}