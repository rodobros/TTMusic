import { Injectable }    from '@angular/core';

import { NotesName } from '../../others/DrawableContent/MusicalNotes/NoteEnum'

@Injectable()
export class MusicSheetSettingsService {
	private tempo_ = 60;
	private beatLength_ = 4; // number under in time signature
	private beatPerMeasure_ = 4 ; // number over in time signature
	private sound_ : string;

	getTempo(): number {
		return this.tempo_;
	}

	getMillisecondsBetweenBeats() : number {
		let numberOfMsInOneSecond = 60000;
		return numberOfMsInOneSecond / this.tempo_;
	}

	setTempo(value) : void {
		this.tempo_ = value;
	}

	getBeatsPerMeasure() : number {
		return this.beatPerMeasure_;
	}

	getBeatLength() : number {
		return this.beatLength_;
	}

	getMaximumNumberSixteenthBeatPerMeasure() : number {
		return this.beatPerMeasure_ * (64 / this.beatLength_); 
	} 

	getNumberSixteenthBeatByNoteName(value) : number {
		if(value == NotesName.Whole) {
			return this.beatLength_ * 16;
		} else if (value == NotesName.Half) {
			return this.beatLength_ * 8;
		} else if (value == NotesName.Quarter) {
			return this.beatLength_  * 4;
		} else if (value == NotesName.Eighth) {
			return this.beatLength_ * 2;
		} else if (value == NotesName.Sixteenth) {
			return this.beatLength_;
		}
	}

	setBeatsPerMeasure(value) : void {
		this.beatPerMeasure_ = value;
	}

	setBeatLength(value) : void {
		this.beatLength_ = value;
	}

	getSound() : HTMLAudioElement {
		return new Audio(this.sound_);
	}

	setSound(value) : void {
		this.sound_ = value;
	}

}