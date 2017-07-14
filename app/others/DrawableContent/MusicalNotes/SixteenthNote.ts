import { DrawableContent } from '../DrawableContent'

import { ApplicationImageSpriteService } from '../../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service';


export class SixteenthNote extends DrawableContent {
	constructor(canvas : any, positionX, positionY,
		private applicationImageSpriteService : ApplicationImageSpriteService) {
		super(canvas);
		this.positionX_ = positionX;
		this.positionY_ = positionY;
	}

	draw() : void {
		if(this.isImageOk(this.applicationImageSpriteService.getSixteenthNoteSprite())) {
			this.context = this.myCanvas.getContext("2d");
			this.context.drawImage(this.applicationImageSpriteService.getSixteenthNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
		}
	};

	private positionX_ = 0;
	private positionY_ = 0;
	private offsetX_ = 14;
	private offsetY_ = 50 - 12;
}
