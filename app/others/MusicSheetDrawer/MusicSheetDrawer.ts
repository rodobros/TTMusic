import DrawableContent from '../DrawableContent/DrawableContent'

import { TimerEventsManagerService } from '../../services/timer-events-service/TimerEventsManager.service'

export class MusicSheetDrawer {
  private drawerID_;
  private myCanvas_ : any;
  private context_ : CanvasRenderingContext2D;
  private elementsToDraw_ : Array<DrawableContent>;
  private drawingTimerID_;
  private speed_;

  constructor(canvas, speed) {
  	this.myCanvas_ = canvas;
  	this.elementsToDraw_ = new Array<DrawableContent>();
  	this.speed_ = speed;
  }

 clearCanvas() : void {
 	let canvas = this.myCanvas_;
 	this.context_ = canvas.getContext("2d");
 	this.context_.clearRect(0, 0, canvas.width, canvas.height);
 }

 addElementToDraw(element:DrawableContent) :void {
 	this.elementsToDraw_.push(element);
 }

 clearElementsToDraw() : void {
 	this.elementsToDraw_ = [];
 }

 deleteElement(id) : void {
   for(var i = 0 ; i < this.elementsToDraw_.length ; ++i) {
     if(this.elementsToDraw_[i].ID == id) {
       this.elementsToDraw_.splice(i,0);
     }
   }
 }

 initDrawing() : void {
 	this.drawerID_ = window.setInterval(() => this.drawingFunction(),100);
 }

 endDrawing() : void {
 	window.clearInterval(this.drawerID_);
 }

 drawingFunction() : void {
 	this.clearCanvas();
 	for(let d of this.elementsToDraw_) {
 		d.draw();
 	}
 }

}