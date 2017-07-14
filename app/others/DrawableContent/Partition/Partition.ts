import { DrawableContent } from '../DrawableContent'
import { Row } from '../Row/Row';
import { Measure } from '../Measure/Measure';
import { Note } from '../MusicalNotes/Note';
import { NotesName } from '../MusicalNotes/NoteEnum'

import { AppConstantsService } from '../../../services/app-constants-service/AppConstants.service'
import { ApplicationImageSpriteService } from '../../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service';
import { MusicSheetSettingsService } from '../../../services/music-sheet-settings-service/music-sheet-settings.service';

export class Partition extends DrawableContent {
	constructor(canvas : any,
				private appConstantsService : AppConstantsService,
				private applicationImageSpriteService : ApplicationImageSpriteService,
				private musicSheetSettingsService : MusicSheetSettingsService) {
		super(canvas);
		this.rows = new Array<DrawableContent>();
	}

	public draw() : void {
		/*
		if(this.rows[this.currentRowNumber]) {
			this.rows[this.currentRowNumber].draw();
		}
		*/
		// should draw everything?
	}

	public createRow() : void {
		this.rows[this.rows.length] = new Row(this.myCanvas);
	}

	public deleteLastRow() : void {
		this.rows[this.rows.length] = undefined;
	}

	public addNote(cursorPositionX, note) : void {
		(<Row>this.rows[this.currentRowNumber_]).getMeasure(Math.floor(cursorPositionX / (Row.ROW_WIDTH / Row.MEASURE_COUNT))).addNote(note);
	}

	public arrangeNotes() : void {
		for (let m of (<Row>this.rows[this.currentRowNumber_]).getAllMeasures()) {
			let measure = (<Measure>m);
			let notes = measure.getNotes();
			for(let n of notes) {
				let castedNote = <Note>n;
				if(!castedNote.wasAjusted){
					var currentMeasure = (<Measure>(<Row>this.rows[this.currentRowNumber_]).getAllMeasures()[castedNote.getMeasureNumber()]);
					var numberOfPossibleNotesPerMeasure =  (this.musicSheetSettingsService.getMaximumNumberSixteenthBeatPerMeasure() / this.musicSheetSettingsService.getNumberSixteenthBeatByNoteName(castedNote.getNoteName()));
					if(numberOfPossibleNotesPerMeasure > 1){
						numberOfPossibleNotesPerMeasure ++;
						var drawableMeasureLength = currentMeasure.getLength();
						var distancePerNote = drawableMeasureLength / numberOfPossibleNotesPerMeasure;	
						var position = Math.floor((castedNote.getPosX() - currentMeasure.getStartX()) / (currentMeasure.getLength() / numberOfPossibleNotesPerMeasure)) + 1;
						if(position == numberOfPossibleNotesPerMeasure) position--;
						castedNote.setPosX(currentMeasure.getStartX() + position * distancePerNote);
					} else {
						castedNote.setPosX(currentMeasure.getStartX() + this.singleNoteOffset);
					}
					castedNote.wasAjusted = true;
				}
			}
		}
	}




	setCurrentRowNumber(value) : void {
		this.currentRowNumber_ = value;
	}
	

	public getRow(number): DrawableContent {
		return this.rows[number];
	}

	private currentRowNumber_ = 0;
	private rows : Array<DrawableContent>;
	private singleNoteOffset = 50;
}

