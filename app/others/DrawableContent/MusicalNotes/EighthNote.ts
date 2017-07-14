import { DrawableContent } from '../DrawableContent'

import { ApplicationImageSpriteService } from '../../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service';


export class EighthNote extends DrawableContent {
	constructor(canvas : any, positionX, positionY,
		private applicationImageSpriteService : ApplicationImageSpriteService) {
		super(canvas);
		this.positionX_ = positionX;
		this.positionY_ = positionY;
	}

	draw() : void {
		if(this.isImageOk(this.applicationImageSpriteService.getEighthNoteSprite())) {
			this.context = this.myCanvas.getContext("2d");
			this.context.drawImage(this.applicationImageSpriteService.getEighthNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
		}
	};

	private positionX_ = 0;
	private positionY_ = 0;
	private offsetX_ = 14;
	private offsetY_ = 52 - 12;
}
