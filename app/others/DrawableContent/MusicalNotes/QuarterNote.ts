import { DrawableContent } from '../DrawableContent'

import { ApplicationImageSpriteService } from '../../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service';


export class QuarterNote extends DrawableContent {
	constructor(canvas : any, positionX, positionY,
		private applicationImageSpriteService : ApplicationImageSpriteService) {
		super(canvas);
		this.positionX_ = positionX;
		this.positionY_ = positionY;
	}

	draw() : void {
		if(this.isImageOk(this.applicationImageSpriteService.getQuarterNoteSprite())) {
			this.context = this.myCanvas.getContext("2d");
			this.context.drawImage(this.applicationImageSpriteService.getQuarterNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
		}
	};

	private positionX_ = 0;
	private positionY_ = 0;
	private offsetX_ = 8;
	private offsetY_ = 24 - 12;
}
