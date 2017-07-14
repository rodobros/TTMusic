import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { MusicSheetDrawer } from '../../others/musicSheetDrawer/MusicSheetDrawer'

import { Partition } from '../../others/DrawableContent/Partition/Partition'
import { Cursor } from '../../others/DrawableContent/Cursor/Cursor'
import { Note } from '../../others/DrawableContent/MusicalNotes/Note'

import { MusicSheetSettingsService } from '../../services/music-sheet-settings-service/music-sheet-settings.service'
import { TimerEventsManagerService } from '../../services/timer-events-service/TimerEventsManager.service'
import { AppConstantsService } from '../../services/app-constants-service/AppConstants.service'
import { ApplicationImageSpriteService } from '../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service';

import { Router } from '@angular/router';


@Component({
  selector: 'music-sheet',
  templateUrl: "app/components/music-sheet/music-sheet.component.html",
  styleUrls: ['app/components/music-sheet/music-sheet.component.css']
})

export class MusicSheetComponent implements AfterViewInit {

	constructor(
		private router: Router,
		private musicSheetSettingsService: MusicSheetSettingsService,
		private timerEventsManagerService : TimerEventsManagerService,
		private appConstantsService : AppConstantsService,
		private applicationImageSpriteService : ApplicationImageSpriteService) { }

	ngAfterViewInit() {
		//init settings :
		this.musicSheetSettingsService.setSound("metronome.wav");

		//init sound : 
		this.soundPool_ = new Array<HTMLAudioElement>();
		for(var i = 0 ; i < this.soundPoolLength_ ; ++i) {
			this.soundPool_.push(this.musicSheetSettingsService.getSound());
		}

		// local variable init :
		this.myCanvas = document.getElementsByTagName("canvas")[0];
		this.drawer = new MusicSheetDrawer(this.myCanvas, this.appConstantsService.getDrawerSpeed());

		// Partition initialize
		this.partition = new Partition(this.myCanvas,this.appConstantsService, this.applicationImageSpriteService, this.musicSheetSettingsService);
		this.partition.createRow();
		this.drawer.addElementToDraw(this.partition.getRow(0));

		// cursor initialize
		this.cursor = new Cursor(this.myCanvas);
		this.drawer.addElementToDraw(this.cursor);
		this.cursor.setSpeed(this.getCursorSpeedPerDrawingEvent(this.musicSheetSettingsService.getTempo(), this.appConstantsService.getMusicSheetRowWidth(), this.appConstantsService.getDrawerSpeed(), this.musicSheetSettingsService.getBeatsPerMeasure()));

		// add timer events
		this.timerEventsManagerService.addEvent("DrawerPlayer", () => this.drawer.drawingFunction(), this.appConstantsService.getDrawerSpeed());
		this.timerEventsManagerService.addEvent("tempoSoundPlayer", () => this.playSoundTimerFunction(), this.musicSheetSettingsService.getMillisecondsBetweenBeats());

		// start the timerEvent;
		this.timerEventsManagerService.startEvents();

 	}

 	private playSoundTimerFunction() : void {
 		this.soundPool_[this.currentSoundIndex_].play();
 		this.currentSoundIndex_ = this.currentSoundIndex_ < this.soundPoolLength_ - 1 ? this.currentSoundIndex_ + 1 : 0;
 	}

	private numberOfSixteenthBeatsSincePressed = 0;
	private noteBeingAddedNow: Note;
 	private drawNoteTimerFunction() : void {
 		this.numberOfSixteenthBeatsSincePressed++;
 		var maximumNumberSixteenthBeats = this.musicSheetSettingsService.getMaximumNumberSixteenthBeatPerMeasure();
 		if(this.numberOfSixteenthBeatsSincePressed > maximumNumberSixteenthBeats){
 			return;
 		}

 		if(this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 12) {
			this.noteBeingAddedNow.changeSprite(this.appConstantsService.getWholeNoteSpriteIndex())
		} else if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 6) {
			this.noteBeingAddedNow.changeSprite(this.appConstantsService.getHalfNoteSpriteIndex())
		} else if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 4) {
			this.noteBeingAddedNow.changeSprite(this.appConstantsService.getQuarterNoteSpriteIndex())
		} else if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 2) {
			this.noteBeingAddedNow.changeSprite(this.appConstantsService.getEighthNoteSpriteIndex())
		} else if (this.numberOfSixteenthBeatsSincePressed <= this.musicSheetSettingsService.getBeatLength()) {
			this.noteBeingAddedNow.changeSprite(this.appConstantsService.getSixteenthNoteSpriteIndex())
		}
 	}

 	public backToSettings() : void {
 		this.timerEventsManagerService.stopAndDestroyAllEvents();
 		let link = ['/startDashboard'];
  		this.router.navigate(link);
 	}

 	public startDrawNote() : void {
 		this.timerEventsManagerService.addEvent("drawNote", () => this.drawNoteTimerFunction(), this.musicSheetSettingsService.getMillisecondsBetweenBeats() / 16);
 		this.noteBeingAddedNow = new Note(this.myCanvas, this.cursor.getPositionX(), 50, this.applicationImageSpriteService, this.appConstantsService);
 		this.partition.addNote(this.cursor.getPositionX(), this.noteBeingAddedNow);
 	}

 	public stopDrawNote() : void {
 		this.timerEventsManagerService.deleteEvent("drawNote");
 		this.numberOfSixteenthBeatsSincePressed = 0;
 		this.partition.arrangeNotes();
 	}
 	

 	private getCursorSpeedPerDrawingEvent(tempo, rowWidth, drawingSpeed, beatsPerMeasure) : number {
 		// to review to take into consideration tempo
 		let measureWidth = rowWidth / this.appConstantsService.getMeasuresPerRow();
 		let distancePerSecond = (measureWidth / beatsPerMeasure) / (60 / tempo);
 		return (distancePerSecond * (drawingSpeed / 1000));
 	}

 	public canvasWidth = this.appConstantsService.getMusicSheetRowWidth().toString();
 	public canvasHeight = this.appConstantsService.getMusicSheetRowHeight().toString();

 	private myCanvas;
	private drawer:MusicSheetDrawer;
 	private partition;
 	private currentPartitionRow = 0;
 	private cursor : Cursor;
 	private soundPool_ : Array<HTMLAudioElement>;
 	private soundPoolLength_ = 50;
 	private currentSoundIndex_ = 0;
 	private drawerSpeed_ = 100; // in ms

 	private aWholeNote;

}