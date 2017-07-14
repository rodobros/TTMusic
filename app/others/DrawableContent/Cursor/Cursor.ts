import { DrawableContent } from '../DrawableContent'

export class Cursor extends DrawableContent {
	private myCanvas_ : any;
  	private context_ : CanvasRenderingContext2D;
  	private positionX_ = 0;
  	private cursorHeight_ = 100;
  	private cursorWidth_ = 6;
  	private speed_ = 0;

  	constructor(canvas) {
  		super(canvas);
  		this.myCanvas_ = canvas;
  	}

  	draw() : void {
  		let canvas = this.myCanvas;
 		  this.context = canvas.getContext("2d");
 		  this.context.beginPath();

 		  // draw the cursor
		  this.context.moveTo(this.positionX_, 0);
		  this.context.lineTo(this.positionX_, this.cursorHeight_);

		  this.context.lineWidth = this.cursorWidth_;
		  this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
		  this.context.stroke();
		  this.incrementPosition();
  	}

  	setSpeed(value) : void {
  		this.speed_ = value;
  	}

  	incrementPosition() : void {
  		if(this.positionX_ >= 1000) {
  			this.positionX_ = 0;
  			return;
  		}
      
  		this.positionX_ = this.positionX_ + this.speed_;
  	}

    getPositionX() : number {
      return this.positionX_;
    }



}