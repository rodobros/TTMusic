import { Injectable }    from '@angular/core';

@Injectable()
export class ApplicationImageSpriteService {
	private wholeNoteImage_ : HTMLImageElement;
	private halfNoteImage_ : HTMLImageElement;
	private quarterNoteImage_ :HTMLImageElement;
	private eighthNoteImage_ : HTMLImageElement;
	private sixteenthNoteImage_ : HTMLImageElement;
	private wholeNoteSrc_ = './images/miniWhole.png';
	private halfNoteSrc_ = './images/miniHalf.png';
	private quarterNoteSrc_ = './images/miniQuarter.png';
	private eighthNoteSrc_ = './images/miniEighth.png';
	private sixteenthNoteSrc_ = './images/miniSixteenth.png';
	

	constructor() {

		this.wholeNoteImage_ = new Image();
		this.wholeNoteImage_.src = this.wholeNoteSrc_;

		this.halfNoteImage_= new Image();
		this.halfNoteImage_.src = this.halfNoteSrc_;

		this.quarterNoteImage_ = new Image();
		this.quarterNoteImage_.src = this.quarterNoteSrc_;

		this.eighthNoteImage_ = new Image();
		this.eighthNoteImage_.src = this.eighthNoteSrc_;

		this.sixteenthNoteImage_ = new Image();
		this.sixteenthNoteImage_.src = this.sixteenthNoteSrc_;
	}


	public getWholeNoteSprite() : HTMLImageElement {
		return this.wholeNoteImage_;
	}

	public getHalfNoteSprite() : HTMLImageElement {
		return this.halfNoteImage_;
	}

	public getQuarterNoteSprite() : HTMLImageElement {
		return this.quarterNoteImage_;
	}

	public getEighthNoteSprite() : HTMLImageElement {
		return this.eighthNoteImage_;
	}

	public getSixteenthNoteSprite() : HTMLImageElement {
		return this.sixteenthNoteImage_;
	}
}