import { DrawableContent } from '../DrawableContent'
import { Note } from '../MusicalNotes/Note';

export class Measure extends DrawableContent {
	constructor(canvas : any, startX, endX, height, measureNumberInRow) {
		super(canvas);
		this.measureNumberInRow = measureNumberInRow;
		this.startX_ = startX;
		this.endX_ = endX;
		this.height_ = height;
		this.notes_ = new Array<DrawableContent>();
	}

	draw() : void {
		this.drawMeasureLines();
		for(let n of this.notes_) {
			n.draw();
		}
	}

	private drawMeasureLines() : void {

		let canvas = this.myCanvas;
 		this.context = canvas.getContext("2d");
 		this.context.beginPath();

		this.context.moveTo(this.startX_, this.height_ * 0.25);
		this.context.lineTo(this.endX_, this.height_ * 0.25);

		this.context.moveTo(this.startX_, this.height_ * 0.5);
		this.context.lineTo(this.endX_, this.height_ * 0.5);

		this.context.moveTo(this.startX_, this.height_ * 0.75);
		this.context.lineTo(this.endX_, this.height_ * 0.75);

		this.context.lineWidth = this.LINE_WIDTH();
		this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
		this.context.stroke();
	}

	public addNote(note : DrawableContent) : void {
		(<Note>note).setMeasureNumber(this.measureNumberInRow);
		this.notes_.push(note);
	}

	public removeNote(Id) : void {
		for(var i = 0 ; i < this.notes_.length ; ++i) {
			if(this.notes_[i].ID == Id){
				this.notes_.splice(i,1);
				return;
			}
		}
	}

	public getNotes() : Array<DrawableContent> {
		return this.notes_;
	}

	public getStartX() : number {
		return this.startX_;
	}

	public getLength() : number {
		return this.endX_ - this.startX_;
	}

	public getEndX() : number {
		return this.endX_;
	}

	private notes_ : Array<DrawableContent>;
	measureNumberInRow : number;
	private startX_;
	private endX_;
	private height_;
}