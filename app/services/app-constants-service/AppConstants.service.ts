import { Injectable }    from '@angular/core';

@Injectable()
export class AppConstantsService {
	getMusicSheetRowWidth() : number {
		return 1000;
	}

	getMusicSheetRowHeight() : number {
		return 100;
	}

	getCanvasDrawerSpeed() : number {
		return 100; // in ms
	}

	getMeasuresPerRow() : number {
		return 4;
	}

	//////////////////// Notes constants
	getWholeNoteSpriteIndex() : number {
		return 4;
	}

	getHalfNoteSpriteIndex() : number {
		return 3;
	}

	getQuarterNoteSpriteIndex() : number {
		return 2;
	}

	getEighthNoteSpriteIndex() : number {
		return 1;
	}

	getSixteenthNoteSpriteIndex() : number {
		return 0;
	}

	getNoteSpriteNumber() : number {
		return 5;
	}

	// notes offsets
	getWholeNoteOffsetX() : number {
		return 8;
	}

	getWholeNoteOffsetY() : number {
		return 5;
	}

	getHalfNoteOffsetX() : number {
		return 8;
	}

	getHalfNoteOffsetY() : number {
		return 37;
	}

	getQuarterNoteOffsetX() : number {
		return 8;
	}

	getQuarterNoteOffsetY() : number {
		return 12;
	}

	getEighthNoteOffsetX() : number {
		return 14;
	}

	getEighthNoteOffsetY() : number {
		return 40;
	}

	getSixteenthNoteOffsetX() : number {
		return 14;
	}

	getSixteenthNoteOffsetY() : number {
		return 38;
	}

	getDrawerSpeed() : number {
		return 100;
	}
}