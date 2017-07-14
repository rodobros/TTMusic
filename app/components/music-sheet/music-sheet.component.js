"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MusicSheetDrawer_1 = require('../../others/musicSheetDrawer/MusicSheetDrawer');
var Partition_1 = require('../../others/DrawableContent/Partition/Partition');
var Cursor_1 = require('../../others/DrawableContent/Cursor/Cursor');
var Note_1 = require('../../others/DrawableContent/MusicalNotes/Note');
var music_sheet_settings_service_1 = require('../../services/music-sheet-settings-service/music-sheet-settings.service');
var TimerEventsManager_service_1 = require('../../services/timer-events-service/TimerEventsManager.service');
var AppConstants_service_1 = require('../../services/app-constants-service/AppConstants.service');
var ApplicationImageSprite_service_1 = require('../../services/ApplicationImagesSpriteService/ApplicationImageSprite.service');
var router_1 = require('@angular/router');
var MusicSheetComponent = (function () {
    function MusicSheetComponent(router, musicSheetSettingsService, timerEventsManagerService, appConstantsService, applicationImageSpriteService) {
        this.router = router;
        this.musicSheetSettingsService = musicSheetSettingsService;
        this.timerEventsManagerService = timerEventsManagerService;
        this.appConstantsService = appConstantsService;
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.numberOfSixteenthBeatsSincePressed = 0;
        this.canvasWidth = this.appConstantsService.getMusicSheetRowWidth().toString();
        this.canvasHeight = this.appConstantsService.getMusicSheetRowHeight().toString();
        this.currentPartitionRow = 0;
        this.soundPoolLength_ = 50;
        this.currentSoundIndex_ = 0;
        this.drawerSpeed_ = 100; // in ms
    }
    MusicSheetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //init settings :
        this.musicSheetSettingsService.setSound("metronome.wav");
        //init sound : 
        this.soundPool_ = new Array();
        for (var i = 0; i < this.soundPoolLength_; ++i) {
            this.soundPool_.push(this.musicSheetSettingsService.getSound());
        }
        // local variable init :
        this.myCanvas = document.getElementsByTagName("canvas")[0];
        this.drawer = new MusicSheetDrawer_1.MusicSheetDrawer(this.myCanvas, this.appConstantsService.getDrawerSpeed());
        // Partition initialize
        this.partition = new Partition_1.Partition(this.myCanvas, this.appConstantsService, this.applicationImageSpriteService, this.musicSheetSettingsService);
        this.partition.createRow();
        this.drawer.addElementToDraw(this.partition.getRow(0));
        // cursor initialize
        this.cursor = new Cursor_1.Cursor(this.myCanvas);
        this.drawer.addElementToDraw(this.cursor);
        this.cursor.setSpeed(this.getCursorSpeedPerDrawingEvent(this.musicSheetSettingsService.getTempo(), this.appConstantsService.getMusicSheetRowWidth(), this.appConstantsService.getDrawerSpeed(), this.musicSheetSettingsService.getBeatsPerMeasure()));
        // add timer events
        this.timerEventsManagerService.addEvent("DrawerPlayer", function () { return _this.drawer.drawingFunction(); }, this.appConstantsService.getDrawerSpeed());
        this.timerEventsManagerService.addEvent("tempoSoundPlayer", function () { return _this.playSoundTimerFunction(); }, this.musicSheetSettingsService.getMillisecondsBetweenBeats());
        // start the timerEvent;
        this.timerEventsManagerService.startEvents();
    };
    MusicSheetComponent.prototype.playSoundTimerFunction = function () {
        this.soundPool_[this.currentSoundIndex_].play();
        this.currentSoundIndex_ = this.currentSoundIndex_ < this.soundPoolLength_ - 1 ? this.currentSoundIndex_ + 1 : 0;
    };
    MusicSheetComponent.prototype.drawNoteTimerFunction = function () {
        this.numberOfSixteenthBeatsSincePressed++;
        var maximumNumberSixteenthBeats = this.musicSheetSettingsService.getMaximumNumberSixteenthBeatPerMeasure();
        if (this.numberOfSixteenthBeatsSincePressed > maximumNumberSixteenthBeats) {
            return;
        }
        if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 12) {
            this.noteBeingAddedNow.changeSprite(this.appConstantsService.getWholeNoteSpriteIndex());
        }
        else if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 6) {
            this.noteBeingAddedNow.changeSprite(this.appConstantsService.getHalfNoteSpriteIndex());
        }
        else if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 4) {
            this.noteBeingAddedNow.changeSprite(this.appConstantsService.getQuarterNoteSpriteIndex());
        }
        else if (this.numberOfSixteenthBeatsSincePressed >= this.musicSheetSettingsService.getBeatLength() * 2) {
            this.noteBeingAddedNow.changeSprite(this.appConstantsService.getEighthNoteSpriteIndex());
        }
        else if (this.numberOfSixteenthBeatsSincePressed <= this.musicSheetSettingsService.getBeatLength()) {
            this.noteBeingAddedNow.changeSprite(this.appConstantsService.getSixteenthNoteSpriteIndex());
        }
    };
    MusicSheetComponent.prototype.backToSettings = function () {
        this.timerEventsManagerService.stopAndDestroyAllEvents();
        var link = ['/startDashboard'];
        this.router.navigate(link);
    };
    MusicSheetComponent.prototype.startDrawNote = function () {
        var _this = this;
        this.timerEventsManagerService.addEvent("drawNote", function () { return _this.drawNoteTimerFunction(); }, this.musicSheetSettingsService.getMillisecondsBetweenBeats() / 16);
        this.noteBeingAddedNow = new Note_1.Note(this.myCanvas, this.cursor.getPositionX(), 50, this.applicationImageSpriteService, this.appConstantsService);
        this.partition.addNote(this.cursor.getPositionX(), this.noteBeingAddedNow);
    };
    MusicSheetComponent.prototype.stopDrawNote = function () {
        this.timerEventsManagerService.deleteEvent("drawNote");
        this.numberOfSixteenthBeatsSincePressed = 0;
        this.partition.arrangeNotes();
    };
    MusicSheetComponent.prototype.getCursorSpeedPerDrawingEvent = function (tempo, rowWidth, drawingSpeed, beatsPerMeasure) {
        // to review to take into consideration tempo
        var measureWidth = rowWidth / this.appConstantsService.getMeasuresPerRow();
        var distancePerSecond = (measureWidth / beatsPerMeasure) / (60 / tempo);
        return (distancePerSecond * (drawingSpeed / 1000));
    };
    MusicSheetComponent = __decorate([
        core_1.Component({
            selector: 'music-sheet',
            templateUrl: "app/components/music-sheet/music-sheet.component.html",
            styleUrls: ['app/components/music-sheet/music-sheet.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, music_sheet_settings_service_1.MusicSheetSettingsService, TimerEventsManager_service_1.TimerEventsManagerService, AppConstants_service_1.AppConstantsService, ApplicationImageSprite_service_1.ApplicationImageSpriteService])
    ], MusicSheetComponent);
    return MusicSheetComponent;
}());
exports.MusicSheetComponent = MusicSheetComponent;
//# sourceMappingURL=music-sheet.component.js.map