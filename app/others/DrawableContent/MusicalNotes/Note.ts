import { DrawableContent } from '../DrawableContent'

import { ApplicationImageSpriteService } from '../../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service';
import { AppConstantsService } from '../../../services/app-constants-service/AppConstants.service'

import { NotesName } from './NoteEnum'


export class Note extends DrawableContent {
	constructor(canvas : any, positionX, positionY,
		private applicationImageSpriteService : ApplicationImageSpriteService,
		private appConstantsService : AppConstantsService) {
		super(canvas);
		this.positionX_ = positionX;
		this.positionY_ = positionY;
		this.updateOffsets();
	}

	draw() : void {
		if(this.isImageOk(this.getCurrentSprite())) {
			this.context = this.myCanvas.getContext("2d");
			this.context.drawImage(this.getCurrentSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
		}
	};

	public updateToNextPossibleNote() : void {
		if(this.currentSpriteIndex < this.appConstantsService.getNoteSpriteNumber() - 1) {
			this.currentSpriteIndex++;
			this.updateOffsets();
			this.currentNoteName = 5 - this.appConstantsService.getNoteSpriteNumber();
		}
	}

	public getCurrentSprite() : HTMLImageElement {
		switch(this.currentSpriteIndex) {
			case this.appConstantsService.getWholeNoteSpriteIndex() : 
				return this.applicationImageSpriteService.getWholeNoteSprite();
			case this.appConstantsService.getHalfNoteSpriteIndex() :
				return this.applicationImageSpriteService.getHalfNoteSprite();
			case this.appConstantsService.getQuarterNoteSpriteIndex() :
				return this.applicationImageSpriteService.getQuarterNoteSprite();
			case this.appConstantsService.getEighthNoteSpriteIndex() :
				return this.applicationImageSpriteService.getEighthNoteSprite();
			case this.appConstantsService.getSixteenthNoteSpriteIndex() : 
				return this.applicationImageSpriteService.getSixteenthNoteSprite();
		}
	}

	public changeSprite(index) : void {
		this.currentSpriteIndex = index;
		this.currentNoteName = 5 - index;
		this.updateOffsets();
	}

	private updateOffsets() : void {
		switch(this.currentSpriteIndex) {
			case this.appConstantsService.getWholeNoteSpriteIndex() : 
				this.offsetX_ = this.appConstantsService.getWholeNoteOffsetX();
				this.offsetY_ = this.appConstantsService.getWholeNoteOffsetY();
				break;
				
			case this.appConstantsService.getHalfNoteSpriteIndex() :
				this.offsetX_ = this.appConstantsService.getHalfNoteOffsetX();
				this.offsetY_ = this.appConstantsService.getHalfNoteOffsetY();
				break;
				
			case this.appConstantsService.getQuarterNoteSpriteIndex() :
				this.offsetX_ = this.appConstantsService.getQuarterNoteOffsetX();
				this.offsetY_ = this.appConstantsService.getQuarterNoteOffsetY();
				break;
				
			case this.appConstantsService.getEighthNoteSpriteIndex() :
				this.offsetX_ = this.appConstantsService.getEighthNoteOffsetX();
				this.offsetY_ = this.appConstantsService.getEighthNoteOffsetY();
				break;
				
			case this.appConstantsService.getSixteenthNoteSpriteIndex() : 
				this.offsetX_ = this.appConstantsService.getSixteenthNoteOffsetX();
				this.offsetY_ = this.appConstantsService.getSixteenthNoteOffsetY();
				break;
				
		}
	}

	getMeasureNumber() : number {
		return this.measureNumber_;
	}

	setMeasureNumber(value) : void {
		this.measureNumber_ = value;
	}

	getPosX() : number {
		return this.positionX_;
	}

	setPosX(value) : void {
		this.positionX_ = value;
	}

	getNoteName() : NotesName {
		return this.currentNoteName;
	}

	private currentNoteName : NotesName;
	private currentSpriteIndex = 0; 
	private positionX_ = 0;
	private positionY_ = 0;
	private offsetX_ = 0;
	private offsetY_ = 0;
	private measureNumber_;
	wasAjusted : boolean = false;
}
