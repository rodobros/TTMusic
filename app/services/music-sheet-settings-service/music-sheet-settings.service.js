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
var NoteEnum_1 = require('../../others/DrawableContent/MusicalNotes/NoteEnum');
var MusicSheetSettingsService = (function () {
    function MusicSheetSettingsService() {
        this.tempo_ = 60;
        this.beatLength_ = 4; // number under in time signature
        this.beatPerMeasure_ = 4; // number over in time signature
    }
    MusicSheetSettingsService.prototype.getTempo = function () {
        return this.tempo_;
    };
    MusicSheetSettingsService.prototype.getMillisecondsBetweenBeats = function () {
        var numberOfMsInOneSecond = 60000;
        return numberOfMsInOneSecond / this.tempo_;
    };
    MusicSheetSettingsService.prototype.setTempo = function (value) {
        this.tempo_ = value;
    };
    MusicSheetSettingsService.prototype.getBeatsPerMeasure = function () {
        return this.beatPerMeasure_;
    };
    MusicSheetSettingsService.prototype.getBeatLength = function () {
        return this.beatLength_;
    };
    MusicSheetSettingsService.prototype.getMaximumNumberSixteenthBeatPerMeasure = function () {
        return this.beatPerMeasure_ * (64 / this.beatLength_);
    };
    MusicSheetSettingsService.prototype.getNumberSixteenthBeatByNoteName = function (value) {
        if (value == NoteEnum_1.NotesName.Whole) {
            return this.beatLength_ * 16;
        }
        else if (value == NoteEnum_1.NotesName.Half) {
            return this.beatLength_ * 8;
        }
        else if (value == NoteEnum_1.NotesName.Quarter) {
            return this.beatLength_ * 4;
        }
        else if (value == NoteEnum_1.NotesName.Eighth) {
            return this.beatLength_ * 2;
        }
        else if (value == NoteEnum_1.NotesName.Sixteenth) {
            return this.beatLength_;
        }
    };
    MusicSheetSettingsService.prototype.setBeatsPerMeasure = function (value) {
        this.beatPerMeasure_ = value;
    };
    MusicSheetSettingsService.prototype.setBeatLength = function (value) {
        this.beatLength_ = value;
    };
    MusicSheetSettingsService.prototype.getSound = function () {
        return new Audio(this.sound_);
    };
    MusicSheetSettingsService.prototype.setSound = function (value) {
        this.sound_ = value;
    };
    MusicSheetSettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MusicSheetSettingsService);
    return MusicSheetSettingsService;
}());
exports.MusicSheetSettingsService = MusicSheetSettingsService;
//# sourceMappingURL=music-sheet-settings.service.js.map